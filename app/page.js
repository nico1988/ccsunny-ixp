import Card from "@/components/Card";

export default function Home() {
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1619878796466-b7982b1d9263?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarImage: "https://i.pravatar.cc/300?img=1",
      title: "Go to zoo",
      date: "Jul.18th.2020",
      location: "New Zealand",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619878796466-b7982b1d9263?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarImage: "https://i.pravatar.cc/300?img=2",
      title: "Attend wedding",
      date: "Jul.18th.2020",
      location: "Hawaii",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619878796466-b7982b1d9263?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarImage: "https://i.pravatar.cc/300?img=3",
      title: "Mountain hiking",
      date: "Jul.18th.2020",
      location: "Malibu",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619878796466-b7982b1d9263?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarImage: "https://i.pravatar.cc/300?img=4",
      title: "Attend birthday party",
      date: "Jul.18th.2020",
      location: "Hawaii",
    },
    {
      image:
        "https://images.unsplash.com/photo-1619878796466-b7982b1d9263?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      avatarImage: "https://i.pravatar.cc/300?img=5",
      title: "Baking",
      date: "Jul.18th.2020",
      location: "Pasadena",
    },
  ];

  return (
    <main className="bg-blue-100 text-xs text-dark-gray">
      <div className="grid grid-cols-2 gap-5">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </main>
  );
}
