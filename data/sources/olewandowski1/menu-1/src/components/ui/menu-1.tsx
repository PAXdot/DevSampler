type Dish = { name: string; detail: string; price: string; note?: string };
type Course = { title: string; dishes: Dish[] };

const courses: Course[] = [
  {
    title: "Antipasti",
    dishes: [
      {
        name: "Focaccia Romana",
        detail: "Rosemary, sea salt, new season olive oil",
        price: "7",
        note: "Vegan",
      },
      {
        name: "Burrata e Pomodorini",
        detail: "Whole burrata, confit tomatoes, basil oil",
        price: "13",
        note: "Vegetarian",
      },
      {
        name: "Olive Ascolane",
        detail: "Stuffed, fried, lemon and parsley",
        price: "9",
      },
      {
        name: "Prosciutto e Melone",
        detail: "24 month San Daniele, cantaloupe, black pepper",
        price: "14",
      },
    ],
  },
  {
    title: "Pizza",
    dishes: [
      {
        name: "Margherita DOP",
        detail: "San Marzano tomato, fior di latte, basil",
        price: "14",
        note: "Vegetarian",
      },
      {
        name: "Marinara",
        detail: "Tomato, garlic, oregano, no cheese",
        price: "12",
        note: "Vegan",
      },
      {
        name: "Diavola",
        detail: "Spicy salame, chilli honey, mozzarella",
        price: "17",
      },
      {
        name: "Salsiccia e Friarielli",
        detail: "Fennel sausage, broccoli rabe, smoked provola",
        price: "18",
      },
      {
        name: "Bufala e Pistacchio",
        detail: "Buffalo mozzarella, pistachio pesto, lemon zest",
        price: "19",
        note: "Vegetarian",
      },
    ],
  },
  {
    title: "Dolci",
    dishes: [
      {
        name: "Tiramisu",
        detail: "Mascarpone, savoiardi, espresso from the bar",
        price: "9",
      },
      {
        name: "Panna Cotta",
        detail: "Vanilla bean, amarena cherries",
        price: "8",
        note: "Gluten free",
      },
      {
        name: "Affogato",
        detail: "Vanilla gelato drowned in hot espresso",
        price: "7",
        note: "Gluten free",
      },
    ],
  },
  {
    title: "Drinks",
    dishes: [
      {
        name: "Negroni Sbagliato",
        detail: "Campari, red vermouth, prosecco, orange",
        price: "13",
      },
      {
        name: "Aperol Spritz",
        detail: "Aperol, prosecco, soda, green olive",
        price: "12",
      },
      {
        name: "Chianti Classico",
        detail: "Sangiovese, Tuscany, by the glass",
        price: "11",
      },
      {
        name: "Limonata della Casa",
        detail: "Amalfi lemons, pressed each morning",
        price: "5",
        note: "Vegan",
      },
    ],
  },
];

export default function MenuBlock() {
  return (
    <section className="w-full bg-background px-6 py-16 text-foreground sm:py-24">
      <div className="mx-auto w-full max-w-4xl">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            The Menu
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Served from five until late, seven nights a week. Prices include
            service.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {courses.map((course) => (
            <section key={course.title}>
              <h3 className="font-heading text-sm font-semibold tracking-[0.18em] uppercase">
                {course.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-4">
                {course.dishes.map((dish) => (
                  <li key={dish.name}>
                    <div className="flex items-baseline gap-2">
                      <span className="font-medium">{dish.name}</span>
                      <span
                        aria-hidden="true"
                        className="min-w-4 flex-1 translate-y-[-0.2rem] border-b border-dotted border-border"
                      />
                      <span className="font-medium tabular-nums">
                        {dish.price}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {dish.detail}
                      {dish.note ? (
                        <>
                          {" "}
                          <span className="text-muted-foreground">
                            {dish.note}
                          </span>
                        </>
                      ) : null}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-muted-foreground">
          Tell us about allergies before you order and the kitchen will walk you
          through every dish.
        </p>
      </div>
    </section>
  );
}
