import { WarpBackground } from "../../components/ui/warp-background"

export const About = () => {
    return (
        <section className="mx-auto max-w-6xl items-center justify-center gap-6 py-12 px-4 md:px-8 text-center">
            <WarpBackground className="border border-none">
                {/* <div className="w-80 justify-center items-center text-center"> */}
                    <h1 className="text-8xl font-extrabold">GOAT</h1>
                    {/* <p>This is a component that creates a warp background effect.</p> */}
                {/* </div> */}
            </WarpBackground>
        </section>
    )
}