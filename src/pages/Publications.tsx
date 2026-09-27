import PublicationCard from "#components/PublicationCard";
import fiddlerBeetlesCover
    from "../assets/paper-covers/FiddlerBeetles.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import polarisation2024Cover
    from "../assets/paper-covers/OspinaRozo2024Polarization.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import deconstructedBeetlesCover
    from "../assets/paper-covers/OspinaRozo2023DeconstructedBeetles.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import prettyCoolBeetlesCover
    from "../assets/paper-covers/OspinaRozo2022PrettyCoolBeetles.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import generalisedApproachCover
    from "../assets/paper-covers/OspinaRozo2022AGeneralizedApproach.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import animalsWearIridescenseCover
    from "../assets/paper-covers/OspinaRozo2021WhenAnimalsWear.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import visualEcologyCover
    from "../assets/paper-covers/Franklin2026VisualEcology.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import modellingStructuralColourCover
    from "../assets/paper-covers/Davis2023Modelling.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import iridescenseUntwinedCover
    from "../assets/paper-covers/Ng2022IridescenceUntwined.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import cracksInTheMirrorCover
    from "../assets/paper-covers/Franklin2021CracksInTheMirror.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import glossCover
    from "../assets/paper-covers/Franklin2021Gloss.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import paradoxCover
    from "../assets/paper-covers/Stuart-Fox2021TheParadox.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"
import iridescenceHydrophobicityCover
    from "../assets/paper-covers/Garcia2020IridescenceHydrophobicity.png?w=100;200;300&format=webp;jpg&as=picture&imagetools"

function Publications() {
    return (
        <>
            <p className="typeset pb-6">
                I am a believer in collaboration and open science. If you cannot access one of my papers through
                your institution or open access, please get in touch and I’ll happily email you a copy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PublicationCard image={fiddlerBeetlesCover}
                                 title="A subsurface array of photonic crystal slabs produces green stripes in a scarab beetle"
                                 description={<span><strong>Laura Ospina-Rozo</strong>, Nicola S. Kubzdela, Zezheng Zhu, James A. Hutchison, Mia Wansbrough, Nanfang Yu, Devi Stuart-Fox, 2026.</span>}
                                 href="https://arxiv.org/abs/2608.02224"
                />
                <PublicationCard image={polarisation2024Cover}
                                 title="Polarization and reflectance are linked to climate, size and mechanistic constraints in a group of scarab beetles"
                                 description={<span><strong>Laura Ospina-Rozo</strong>, Iliana Medina, Andrew Hugall, Katrina J. Rankin, Nicholas W. Roberts, Ann Roberts, Andrew Mitchell, Chris A. M. Reid, Adnan Moussalli & Devi Stuart-Fox, 2024.</span>}
                                 href="https://www.nature.com/articles/s41598-024-80325-1"/>
                <PublicationCard image={deconstructedBeetlesCover}
                                 title="Deconstructed beetles: Bilayered composite materials produce green coloration with remarkably high near-infrared reflectance"
                                 description={<span><strong>Laura Ospina-Rozo</strong>, Niken Priscilla, James A. Hutchison, Allison van de Meene, Nicholas W. Roberts, Devi Stuart-Fox, Ann Roberts, 2023.</span>}
                                 href="https://www.sciencedirect.com/science/article/pii/S2590049823000231#abs0020"
                />
                <PublicationCard image={prettyCoolBeetlesCover}
                                 title="Pretty Cool Beetles: Can Manipulation of Visible and Near-Infrared Sunlight Prevent Overheating?"
                                 description={
                                     <span><strong>Laura Ospina-Rozo</strong>, Jegadesan Subbiah, Ainsley Seago, Devi Stuart-Fox, 2023.</span>}
                                 href="https://academic.oup.com/iob/article/4/1/obac036/6661422"
                />
                <PublicationCard image={generalisedApproachCover}
                                 title="A generalized approach to characterize optical properties of natural objects"
                                 description={<span><strong>Laura Ospina-Rozo</strong>, Ann Roberts, Devi Stuart-Fox, 2022.</span>}
                                 href="https://academic.oup.com/biolinnean/article/137/3/534/6714011"
                />
                <PublicationCard image={animalsWearIridescenseCover}
                                 title="When Animals Wear Iridescence"
                                 description={<span><strong>Laura Ospina-Rozo</strong>, Leslie Ng, 2021. Functional Ecology Creative Writing.</span>}
                                 href="https://functionalecologists.com/2021/12/10/when-animals-wear-iridescence/"
                />
                <PublicationCard image={visualEcologyCover}
                                 title="Visual ecology: The trade-off of dazzling, glossy signals"
                                 description={
                                     <span>Amanda M. Franklin, <strong>Laura Ospina-Rozo</strong>, 2026.</span>}
                                 href="https://www.cell.com/current-biology/abstract/S0960-9822(25)01705-1"
                />
                <PublicationCard image={modellingStructuralColourCover}
                                 title="Modelling structural colour from helicoidal multi-layer thin films with natural disorder "
                                 description={<span>T. J. Davis, <strong>L. Ospina-Rozo</strong>, D. Stuart-Fox, and A. Roberts, 2023.</span>}
                                 href="https://opg.optica.org/oe/fulltext.cfm?uri=oe-31-22-36531"
                />
                <PublicationCard image={iridescenseUntwinedCover}
                                 title="Iridescence untwined: honey bees can separate hue variations in space and time"
                                 description={<span>Leslie Ng, <strong>Laura Ospina-Rozo</strong>, Jair E Garcia, Adrian G Dyer, Devi Stuart-Fox, 2022.</span>}
                                 href="https://academic.oup.com/beheco/article/33/4/884/6603753"
                />
                <PublicationCard image={cracksInTheMirrorCover}
                                 title="Cracks in the mirror hypothesis: High specularity does not reduce detection or predation risk"
                                 description={
                                     <span>Amanda M. Franklin, Katrina J. Rankin, <strong>Laura Ospina Rozo</strong>, Iliana Medina, Jair E. Garcia, Leslie Ng, Caroline Dong, Lu-Yi Wang, Anne E. Aulsebrook, Devi Stuart-Fox, 2021.</span>}
                                 href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2435.13963"
                />
                <PublicationCard image={glossCover}
                                 title="Gloss"
                                 description={
                                     <span>Amanda M. Franklin, <strong>Laura Ospina-Rozo</strong>, 2021.</span>}
                                 href="https://www.cell.com/current-biology/fulltext/S0960-9822(20)31778-4"
                />
                <PublicationCard image={paradoxCover}
                                 title="The Paradox of Iridescent Signals"
                                 description={<span>Devi Stuart-Fox, <strong>Laura Ospina-Rozo</strong>, Leslie Ng, Amanda M. Franklin, 2021.</span>}
                                 href="https://www.sciencedirect.com/science/article/abs/pii/S0169534720302871"
                />
                <PublicationCard image={iridescenceHydrophobicityCover}
                                 title="Iridescence and hydrophobicity have no clear delineation that explains flower petal micro-surface"
                                 description={<span>Jair E. Garcia, Mani Shrestha, <strong>Laura Ospina-Rozo</strong>, Chaitali Dekiwadia, Matthew R. Field, Ji Sheng Ma, Nhiem Tran, Adrian G. Dyer, Kate Fox & Andrew D. Greentree, 2020.</span>}
                                 href="https://www.nature.com/articles/s41598-020-67663-6"
                />
            </div>
        </>
    )
}

export default Publications