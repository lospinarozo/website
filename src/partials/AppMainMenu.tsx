import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList
} from "#components/ui/navigation-menu";
import {Link, useLocation} from "react-router-dom";
import {NOT_FOUND_ROUTE, routes} from "#lib/constants/routes";
import {Button} from "#components/ui/button";
import {Menu} from "lucide-react";
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "#components/ui/drawer";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider
} from "#components/ui/sidebar";

const title = "Laura Bibiana Ospina Rozo, PhD"

function AppMainMenu() {
    const location = useLocation();

    const isCurrentLocation = (candidate?: string): boolean => {
        return location.pathname === candidate;
    }

    return (
        <NavigationMenu className="pl-4 pr-4 pt-3 pb-2 min-w-screen grow-0 font-semibold">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <p>{title}</p>
                </NavigationMenuItem>
                <NavigationMenuItem className="flex-1"/>
                <div className="hidden md:flex md:gap-x-2">
                    <NavigationMenuItem>
                        <NavigationMenuLink active={isCurrentLocation(routes.get("home")?.fullPath)}
                                            render={<Link
                                                to={routes.get("home")?.fullPath ?? NOT_FOUND_ROUTE.fullPath}/>}>Home</NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuLink active={isCurrentLocation("/publications")}
                                            render={<Link to="/publications"/>}>Publications</NavigationMenuLink>
                    </NavigationMenuItem>
                </div>
                <div className="block md:hidden">
                    <AppDrawer/>
                </div>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function AppDrawerIcon({...props}) {
    return (
        <Button size="icon" aria-label="Open menu" variant="outline" {...props}>
            <Menu/>
        </Button>
    )
}

function AppDrawer() {
    return (
        <Drawer
            swipeDirection="left">
            <DrawerTrigger render={<AppDrawerIcon/>}>Open</DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className="line-clamp-1">
                        {title}
                    </DrawerTitle>
                </DrawerHeader>
                <SidebarProvider>
                    <SidebarGroup>
                        <SidebarGroupLabel>Main menu</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenuItem>
                                <SidebarMenuButton render={<Link
                                    to={routes.get("home")?.fullPath ?? NOT_FOUND_ROUTE.fullPath}/>}>Home</SidebarMenuButton>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <SidebarMenuButton render={<Link
                                    to={routes.get("publications")?.fullPath ?? NOT_FOUND_ROUTE.fullPath}/>}>Publications</SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarProvider>
            </DrawerContent>
        </Drawer>
    )
}

export default AppMainMenu;