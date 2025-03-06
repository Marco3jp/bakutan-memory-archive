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
      <ul className="flex items-center justify-center h-full">
        <li className="border border-natori-accent-pink rounded-xl p-8">
          <Link to="/" className="text-2xl font-bold text-center flex flex-col">
            <span>さなのばくたん。(2024)</span>
            <span>王国からの招待状</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
