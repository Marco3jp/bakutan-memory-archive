import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const memories = [{
    id: 1,
    title: 'test',
    content: 'test',
    createdAt: '2021-10-10',
    updatedAt: '2021-10-10',
    deletedAt: '2021-10-10',
}]

const memoriesElement = memories.map((memory) => {
    return (
        <li className="flex" key={memory.id}>
            <h2>{memory.title}</h2>
            <p>{memory.content}</p>
        </li>
    )
})

export default function Index() {
  return (
    <div className="text-neutral-50 bg-gray-950 h-dvh w-dvw">
      <header className="border-b border-solid border-natori-accent-pink flex">
        <h1>bakutan archive memory</h1>
        <button type="button">
          <a>
            記録する
          </a>
        </button>
      </header>

      <main>
          <ul>
              {memoriesElement}
          </ul>
      </main>
    </div>
  );
}
