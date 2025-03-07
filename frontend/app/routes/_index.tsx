import { Link } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        {title: "bakutan memory archive"},
        {name: "description", content: "イベントの思い出をいつまでも見やすく保つためのサービスです"},
    ];
};

export default function IndexesPage() {
  return (
    <div className="text-neutral-50 bg-gray-950 h-dvh w-dvw border border-natori-accent-pink rounded-sm">
      <ul className="flex flex-col items-center justify-center h-full space-y-12 px-4">
        <li className="border border-natori-accent-pink rounded-xl p-8 min-w-1/3">
          <Link to="/bakutan2025" className="text-2xl font-bold text-center flex flex-col">
            <span>さなのばくたん。(2025)</span>
            <span className="text-xl">をやろうと思ったら異世界に転生していた件について</span>
          </Link>
        </li>
        <li className="border border-natori-accent-pink rounded-xl p-8 min-w-1/3">
          <Link to="/bakutan2024" className="text-2xl font-bold text-center flex flex-col">
            <span>さなのばくたん。(2024)</span>
            <span>王国からの招待状</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
