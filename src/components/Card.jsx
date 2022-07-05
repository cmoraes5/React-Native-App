import { Link } from './Link'

export function Card() {
    return (
        <>
            <div className="flex flex-col gap-5 items-center bg-zinc-200 max-w-md p-10 rounded-md">
                <img src="https://avatars.githubusercontent.com/u/85966695?v=4" className="max-w-[150px] rounded-full border-4 border-violet-700 hover:drop-shadow-md hover:shadow-indigo-500/50 transition-all" alt="" />
                <div>
                    <Link/>
                    <Link/>
                    <Link/>
                    <Link/>
                </div>
            </div>
        </>
    )
}