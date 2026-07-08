export interface Review {
  id: string;
  name: string;
  rating: number;
  date: string;
  review: string;
  avatar: string;
  service?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Priya Mehra",
    rating: 5,
    date: "2 weeks ago",
    review:
      "Absolute luxury experience! I walked in feeling ordinary and walked out feeling like a celebrity. The attention to detail, the ambience, the expertise — everything was 10/10. The Luxe Lounge truly lives up to its name.",
    avatar: "https://i.pravatar.cc/150?img=47",
    service: "Hair Color & Styling",
  },
  {
    id: "2",
    name: "Sunita Rathore",
    rating: 5,
    date: "1 month ago",
    review:
      "Got my bridal hair done here and I cried at how beautiful it turned out. Aria is an absolute genius with braids and traditional up-dos. My entire wedding party was asking who did my hair!",
    avatar: "https://i.pravatar.cc/150?img=45",
    service: "Bridal Styling",
  },
  {
    id: "3",
    name: "Kavita Joshi",
    rating: 5,
    date: "3 weeks ago",
    review:
      "The keratin treatment has completely transformed my hair. For the first time in years, I can leave home without hours of styling. Worth every rupee. The experience was so relaxing and professional.",
    avatar: "https://i.pravatar.cc/150?img=48",
    service: "Keratin Treatment",
  },
  {
    id: "4",
    name: "Rajesh Verma",
    rating: 5,
    date: "1 month ago",
    review:
      "Best men's grooming experience in Barmer, period. Dev knows exactly what he's doing — the cut was precise, the beard trim was perfect. The salon itself feels like something out of a magazine.",
    avatar: "https://i.pravatar.cc/150?img=33",
    service: "Men's Grooming",
  },
  {
    id: "5",
    name: "Anita Choudhary",
    rating: 5,
    date: "2 months ago",
    review:
      "I've been to many salons in Jodhpur and Jaipur but this one in Barmer beats them all. The products they use are truly premium. My hair spa left my hair feeling like pure silk. I'm a client for life.",
    avatar: "https://i.pravatar.cc/150?img=44",
    service: "Hair Spa",
  },
  {
    id: "6",
    name: "Meena Sharma",
    rating: 5,
    date: "3 weeks ago",
    review:
      "The hair botox treatment saved my damaged hair. Zara walked me through every step and made sure I was comfortable throughout. The results are absolutely stunning. Thank you, Luxe Lounge!",
    avatar: "https://i.pravatar.cc/150?img=49",
    service: "Hair Botox",
  },
];
