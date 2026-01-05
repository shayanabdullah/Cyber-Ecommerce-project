import reviewPic from '../assets/reviewer/review-pic-1.jpg'
import reviewPic2 from '../assets/reviewer/review-pic-2.jpg'
import reviewPic3 from '../assets/reviewer/review-pic-3.jpg'



export const reviewSummary = {
  totalReviews: 3384,
  averageRating: 4.7,
  ratingsBreakdown: {
    excellent: 1675,
    good: 725,
    average: 578,
    belowAverage: 222,
    poor: 186,
  },
};


export const reviewsData = [
  {
    id: 1,
    name: "Grace Carey",
    rating: 5,
    date: "12 March, 2026",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&fit=crop",
    comment:
      "Upgraded from the iPhone 14 Pro and the difference is noticeable immediately. The 120Hz display feels even smoother and the A19 Pro chip is insanely fast. Camera performance, especially night photos, is a big improvement. Battery easily lasts me a full day with heavy use.",
    images: [],
  },

  {
    id: 2,
    name: "Ronald Richards",
    rating: 4.5,
    date: "18 March, 2026",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&fit=crop",
    comment:
      "The iPhone 17 Pro feels extremely premium in hand. Gaming performance is excellent with no frame drops, even during long sessions. The phone does get slightly warm, but nothing concerning. Price is high, but expected for a Pro model.",
    images: reviewPic,
  },

  {
    id: 3,
    name: "Darcy King",
    rating: 4,
    date: "21 March, 2026",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=200&fit=crop",
    comment:
      "Camera quality is fantastic in daylight and video stabilization is top-tier. Low-light photos are good but still not perfect in extreme darkness. Overall, a very reliable flagship device.",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
    ],
  },

  {
    id: 4,
    name: "John Malcolm",
    rating: 5,
    date: "25 March, 2026",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&fit=crop",
    comment:
      "iOS 26 runs buttery smooth on this phone. Apps open instantly and multitasking feels effortless. The aluminum frame feels solid and the Ceramic Shield gives peace of mind. Easily the best iPhone I’ve used so far.",
    images: reviewPic2,
  },

  {
    id: 5,
    name: "Ayesha Rahman",
    rating: 4.5,
    date: "30 March, 2026",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&fit=crop",
    comment:
      "The display is gorgeous and extremely bright outdoors. I love how smooth scrolling feels. Battery life is better than my previous iPhone, though heavy camera use drains it faster. Still very satisfied.",
    images: [],
  },

  {
    id: 6,
    name: "Tanvir Hasan",
    rating: 4,
    date: "02 April, 2026",
    avatar:
      "https://images.unsplash.com/photo-1545996124-0501ebae84d0?w=200&fit=crop",
    comment:
      "Performance is top-notch and the phone handles editing videos without any lag. Charging speed is decent but not class-leading. Would’ve loved slightly faster charging at this price.",
    images: reviewPic3,
  },

  {
    id: 7,
    name: "Emily Watson",
    rating: 5,
    date: "05 April, 2026",
    avatar:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&fit=crop",
    comment:
      "The new camera system is amazing for content creation. Pro video modes and stabilization are on another level. If you shoot a lot of videos or photos, this phone is absolutely worth it.",
    images: [
      "https://images.unsplash.com/photo-1512499617640-c2f999098c01?w=400",
    ],
  },

  {
    id: 8,
    name: "Michael Brown",
    rating: 4.5,
    date: "10 April, 2026",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop",
    comment:
      "Battery life has improved compared to older Pro models. I consistently get around 6–7 hours of screen-on time. Performance, camera, and display all feel top-tier.",
    images: [],
  },

  {
    id: 9,
    name: "Nusrat Jahan",
    rating: 4,
    date: "14 April, 2026",
    avatar:
      "https://images.unsplash.com/photo-1548142813-c348350df52b?w=200&fit=crop",
    comment:
      "The phone looks and feels premium. Face ID is fast, speakers are loud and clear, and overall experience is very polished. Only downside is the price, but that’s expected.",
    images: [],
  },
];
