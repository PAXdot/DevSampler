import { GlowCard, GlowCardGrid } from "@/components/ui/glow-card-grid";

export default function Team01() {
  return (
    <div className="container px-4 py-8">
      <GlowCardGrid className="lg:grid-cols-4">
        {CARDS.map((card) => (
          <GlowCard
            key={card.name}
            name={card.name}
            handle={card.handle}
            avatar={card.avatar}
          />
        ))}
      </GlowCardGrid>
    </div>
  );
}

// Demo avatars only. Replace them with your own URLs.
const CARDS = [
  {
    name: "shadcn",
    handle: "@shadcn",
    avatar:
      "https://cdn.21st.dev/assets/localized/a09b126371686621ce81cc933accbe3f2c247cc5928604ce1dfb181d7d6db9d1.webp",
  },
  {
    name: "Evil Rabbit",
    handle: "@evilrabbit_",
    avatar:
      "https://cdn.21st.dev/assets/localized/384c4de93f70578fd442198ebec6469a731de381225e8e614037e94160ced364.webp",
  },
  {
    name: "OrcDev",
    handle: "@orcdev",
    avatar:
      "https://cdn.21st.dev/assets/localized/7d9e34ad2528e1d598e6ee292d50c705c51f71779f1676d0dfc9aa744379f45c.webp",
  },
  {
    name: "David Haz",
    handle: "@davidhaz",
    avatar:
      "https://cdn.21st.dev/assets/localized/696fd88b24d7215274f90ca112c480e99da0733d1d2ebbfe6d660da0cac521ef.webp",
  },
  {
    name: "Shu",
    handle: "@shuding",
    avatar:
      "https://cdn.21st.dev/assets/localized/8239268fdde100e3b2385a6b704754f40b9d705facaeb5a1e799fb90bc6ace06.webp",
  },
  {
    name: "Emil Kowalski",
    handle: "@emilkowalski",
    avatar:
      "https://cdn.21st.dev/assets/localized/d8bcd0deca2afeabc560624cd1fab460280f152aabb82936c73f2721fae2b888.webp",
  },
  {
    name: "Aaron",
    handle: "@aaronmahlke",
    avatar:
      "https://cdn.21st.dev/assets/localized/84e6d9aac289f8843e777bf9cd49a70400e4ac2029eb67c67dbdf3cc150417ef.webp",
  },
  {
    name: "Chánh Đại",
    handle: "@iamncdai",
    avatar:
      "https://cdn.21st.dev/assets/localized/d230663dcfc372021ce6645f7bf8638c29ad8e4722d52a085ec56b57f7e59df7.webp",
  },
];
