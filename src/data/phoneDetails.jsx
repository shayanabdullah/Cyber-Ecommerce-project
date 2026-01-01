 import { FiSmartphone, FiCpu, FiCamera, FiBattery } from "react-icons/fi";
import { BsCpu, BsCameraVideo } from "react-icons/bs";
 
 
 export const phoneDetails = [
  {
    id: "iphone-17-pro",
       overview: {
    description:
  "The Apple iPhone 17 Pro delivers flagship performance with a stunning 6.3″ Super Retina XDR OLED display featuring ProMotion 120Hz refresh rate for silky-smooth scrolling and HDR10/Dolby Vision support. Powered by the ultra-efficient A19 Pro chip and a 6-core CPU with a 6-core GPU, it handles pro-level gaming, intensive apps, and multitasking effortlessly. The advanced triple 48 MP camera system, including wide, ultra-wide, and periscope telephoto lenses, along with LiDAR, allows professional-quality photos and 4K Dolby Vision HDR videos in any lighting condition. The 18 MP Center Stage front camera ensures perfect selfies and seamless video calls. With up to 37 hours of video playback, fast charging, MagSafe & Qi wireless charging, and a sleek aluminum unibody with Ceramic Shield 2 for durability, the iPhone 17 Pro is designed to combine elegance, endurance, and performance in one premium device."

    },

    display: {
      title: "Screen",
      specs: [
        { label: "Screen diagonal", specvalue: "6.3″" },
        { label: "Resolution", specvalue: "2622 × 1206 pixels" },
        { label: "Refresh rate", specvalue: "120 Hz (ProMotion)" },
        { label: "Pixel density", specvalue: "460 ppi" },
        { label: "Screen type", specvalue: "Super Retina XDR OLED (LTPO)" },
        {
          label: "Additional features",
          value: [
          {
            feature :   "HDR10",
          },
          {
            feature :    "Dolby Vision",
          },
          {
            feature : "Always‑On Display",
          },
          {
            feature :  "True Tone",
          },
          {
            feature : "Dynamic Island",
          },
          ],
        },
      ],
    },

    processor: {
      title: "CPU",
      specs: [
        { label: "Chipset", value: "Apple A19 Pro" },
        { label: "Architecture", value: "64‑bit" },
        { label: "Number of cores", value: "6‑core CPU" },
        { label: "GPU", value: "6‑core Apple GPU" },
        { label: "Neural Engine", value: "16‑core Neural Engine" },
      ],
    },

    memory: {
      title: "Memory",
      specs: [
        { label: "RAM", value: "12 GB" },
        { label: "Internal storage", value: ["256 GB", "512 GB", "1 TB"] },
        { label: "Expandable storage", value: "No" },
      ],
    },

    camera: {
      title: "Camera",
      rear: [
        {
          label: "Main camera (wide)",
          value: "48 MP, f/1.78, sensor‑shift OIS",
        },
        {
          label: "Telephoto",
          value: "48 MP, f/2.8, periscope, 4× optical zoom",
        },
        {
          label: "Ultra‑wide",
          value: "48 MP, f/2.2, 120°",
        },
        { label: "LiDAR Scanner", value: "3D depth sensor" },
        {
          label: "Video recording",
          value: "4K @ up to 60 fps, Dolby Vision HDR, ProRes & ProRes RAW",
        },
      ],
      front: [
        { label: "Front camera", value: "18 MP, Center Stage" },
        { label: "Video", value: "4K @ up to 60 fps" },
      ],
    },

    battery: {
      title: "Battery",
      specs: [
        { label: "Capacity", value: "≈3988 mAh (typical)" },
        { label: "Video playback", value: "Up to ~31 hrs" },
        { label: "Charging", value: "Fast charge: 50% in ~20 min" },
        { label: "Wireless charging", value: "MagSafe & Qi" },
      ],
    },

    connectivity: {
      title: "Connectivity",
      specs: [
        { label: "Network", value: "5G, LTE, GSM" },
        { label: "Wi‑Fi", value: "Wi‑Fi 7" },
        { label: "Bluetooth", value: "Bluetooth 6.0" },
        { label: "GPS", value: "GPS, GLONASS, Galileo" },
        { label: "USB", value: "USB‑C 3.2" },
        { label: "Other", value: "UWB Gen2, Satellite SOS" },
      ],
    },

    build: {
      title: "Build & Design",
      specs: [
        { label: "Frame", value: "Aluminum unibody" },
        { label: "Front glass", value: "Ceramic Shield 2" },
        { label: "Back", value: "Ceramic Shield 2" },
        { label: "Water resistance", value: "IP68" },
        { label: "Weight", value: "204 g" },
      ],
    },

    sensors: {
      title: "Sensors",
      specs: [
        "Face ID",
        "Accelerometer",
        "Gyroscope",
        "Proximity sensor",
        "Ambient light sensor",
        "Compass",
        "LiDAR Scanner",
      ],
    },

    software: {
      title: "Software",
      specs: [
        { label: "Operating system", value: "iOS 26" },
        { label: "Update support", value: "5+ years" },
      ],
    },

  },
];

export  const productData = [
    {
      id: "iphone-17-pro",
      name: "Apple iPhone 17 Pro",

      description:
        "The Apple iPhone 17 Pro delivers flagship performance with a stunning Super Retina XDR OLED display, powered by the ultra-efficient A19 Pro chip and an advanced triple-camera system that captures incredible detail in any lighting condition. Built for pro-level photography, smooth high-performance gaming, and seamless multitasking, it offers all-day battery efficiency, a refined premium design, and a fluid user experience that keeps up with everything you do.",

      specs: [
        {
          id: 1,
          title: "Screen size",
          value: "6.3″ Super Retina XDR OLED",
          icon: <FiSmartphone />
        },
        {
          id: 2,
          title: "Processor",
          value: "Apple A19 Pro",
          icon: <FiCpu />
        },
        {
          id: 3,
          title: "Cores",
          value: "6-core CPU",
          icon: <BsCpu />
        },
        {
          id: 4,
          title: "Main camera",
          value: "48 MP + 48 MP + 48 MP",
          icon: <FiCamera />
        },
        {
          id: 5,
          title: "Front camera",
          value: "18 MP Center Stage",
          icon: <BsCameraVideo />
        },
        {
          id: 6,
          title: "Battery",
          value: "Up to 37 hrs video playback",
          icon: <FiBattery />
        },
      ],

      variants: [
        {
          id: 1,
          variant: "256GB",
          price: 1099,
          previousPrice: 1199,
        },
        {
          id: 2,
          variant: "512GB",
          price: 1299,
          previousPrice: 1399,
        },
        {
          id: 3,
          variant: "1TB",
          price: 1499,
          previousPrice: 1699,
        },
      ],
    },
  ];