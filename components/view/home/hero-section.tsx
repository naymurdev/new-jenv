"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { LiquidGlassCard } from "@/components/ui/liquid-glass";

import { ReactLenis } from "lenis/react";
import Service from "./service";
import HightlightSec from "./highlights";
import HowWeWork from "./how-we-work";
import Testimonial from "./testimonial";
import People from "./people";
import Faqs from "./faqs";
import Pricing from "./pricing";
import Footer from "./footer";

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ReactLenis root>
      <section
        className="w-full rounded-md relative grid place-items-center h-screen"
        ref={containerRef}
      >
        <article className="w-full relative text-white max-w-7xl mx-auto text-center pb-10">
          <h1 className="relative z-10 !leading-[80%] xl:text-8xl md:text-7xl sm:text-6xl text-4xl">
            Lean MVPs & fast builds. <br /> A partner that gets it.
          </h1>
          <motion.p
            initial={{ filter: "blur(20px)", y: 0, opacity: 0 }}
            animate={{ filter: "blur(0px)", y: 0, opacity: 1 }}
            className="text-lg text-white max-w-xl mx-auto pt-8"
          >
            JENV is your fast, strategic product partner you don’t need to
            manage. We deliver market-ready MVPs for founders and growing
            companies, without the overhead and delays of traditional agencies.
          </motion.p>
          <LiquidGlassCard
            draggable={false}
            blurIntensity="sm"
            glowIntensity="sm"
            shadowIntensity="sm"
            className="w-fit h-12 mx-auto mt-12 px-5 rounded-full relative flex items-center justify-center text-white row-span-2"
          >
            <span className="relative z-10">GET STARTED</span>
          </LiquidGlassCard>
        </article>

        <svg
          width="1440"
          height="1829"
          className="absolute 2xl:top-44 left-[12%] right-[12%] -z-10 "
          viewBox="0 0 1440 1829"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_427_2)">
            <path
              d="M147.027 269.13C-11.1543 210.156 -59.8127 301.513 -64.3694 354.563C-83.7352 386.133 -122.857 477.979 -124.42 592.802C-126.372 736.33 -571.628 505.813 58.1658 858.776C687.96 1211.74 1257.71 903.292 1449.58 812C1641.45 720.708 1569.68 558.14 1546.73 391.178C1523.79 224.216 1520.37 318.347 1260.64 320.3C1000.91 322.253 949.648 452.6 817.831 541.451C686.013 630.302 688.943 522.9 466.318 429.655C243.693 336.41 344.753 342.847 147.027 269.13Z"
              fill="#F97026"
              fill-opacity="0.55"
            />
          </g>
          <g filter="url(#filter1_f_427_2)">
            <path
              d="M138.027 482.13C-20.1543 423.156 -68.8128 514.513 -73.3694 567.563C-92.7352 599.133 -131.857 690.979 -133.42 805.802C-135.372 949.33 -580.629 718.813 49.1658 1071.78C678.96 1424.74 1248.71 1116.29 1440.58 1025C1632.45 933.708 1560.68 771.14 1537.73 604.178C1514.79 437.216 1511.37 531.347 1251.64 533.3C991.91 535.253 940.648 665.6 808.831 754.451C677.013 843.302 679.943 735.9 457.318 642.655C234.693 549.41 335.753 555.847 138.027 482.13Z"
              fill="url(#paint0_linear_427_2)"
            />
          </g>
          <g filter="url(#filter2_f_427_2)">
            <path
              d="M-73.3694 615.563C-68.8127 562.513 -20.1543 471.156 138.027 530.13C279.624 582.921 475.225 706.799 656.844 806.598C659.417 806.605 666.16 808.279 678 812C829.653 859.662 991.91 583.253 1251.64 581.3C1511.37 579.347 1514.79 485.216 1537.73 652.178C1560.68 819.14 1632.45 981.708 1440.58 1073C1248.71 1164.29 678.96 1472.74 49.1658 1119.78C-580.628 766.813 -135.372 997.33 -133.42 853.802C-131.857 738.979 -92.7352 647.133 -73.3694 615.563Z"
              fill="#F4BD8A"
            />
          </g>
          <g filter="url(#filter3_f_427_2)">
            <path
              d="M-73.3694 615.563C-68.8127 562.513 -20.1543 471.156 138.027 530.13C279.624 582.921 475.225 706.799 656.844 806.598C659.417 806.605 666.16 808.279 678 812C829.653 859.662 991.91 583.253 1251.64 581.3C1511.37 579.347 1514.79 485.216 1537.73 652.178C1560.68 819.14 1632.45 981.708 1440.58 1073C1248.71 1164.29 678.96 1472.74 49.1658 1119.78C-580.628 766.813 -135.372 997.33 -133.42 853.802C-131.857 738.979 -92.7352 647.133 -73.3694 615.563Z"
              fill="#3B2921"
            />
          </g>
          <g filter="url(#filter4_f_427_2)">
            <path
              d="M-84.3694 909.563C-79.8127 856.513 -31.1543 765.156 127.027 824.13C268.624 876.921 464.225 1000.8 645.844 1100.6C648.417 1100.61 655.16 1102.28 667 1106C818.653 1153.66 980.91 877.253 1240.64 875.3C1500.37 873.347 1503.79 779.216 1526.73 946.178C1549.68 1113.14 1621.45 1275.71 1429.58 1367C1237.71 1458.29 667.96 1766.74 38.1658 1413.78C-591.628 1060.81 -146.372 1291.33 -144.42 1147.8C-142.857 1032.98 -103.735 941.133 -84.3694 909.563Z"
              fill="#1A1A1A"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_427_2"
              x="-529"
              y="0"
              width="2358"
              height="1274"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_427_2"
              />
            </filter>
            <filter
              id="filter1_f_427_2"
              x="-538"
              y="213"
              width="2358"
              height="1274"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_427_2"
              />
            </filter>
            <filter
              id="filter2_f_427_2"
              x="-538"
              y="261"
              width="2358"
              height="1274"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_427_2"
              />
            </filter>
            <filter
              id="filter3_f_427_2"
              x="-538"
              y="261"
              width="2358"
              height="1274"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_427_2"
              />
            </filter>
            <filter
              id="filter4_f_427_2"
              x="-549"
              y="555"
              width="2358"
              height="1274"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_427_2"
              />
            </filter>
            <linearGradient
              id="paint0_linear_427_2"
              x1="701.053"
              y1="661.275"
              x2="701.053"
              y2="1265.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ACADB1" />
              <stop offset="0.375" stop-color="#FBA874" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute 2xl:top-44 left-0 -z-10 w-full"
          width="2136"
          height="2214"
          viewBox="0 0 2136 2214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f_438_11)">
            <path
              d="M374.627 273.53C180.059 200.991 120.208 313.363 114.603 378.616C90.7825 417.448 42.6611 530.421 40.7394 671.657C38.3374 848.202 -509.342 564.658 265.325 998.814C1039.99 1432.97 1740.8 1053.57 1976.81 941.278C2212.81 828.986 2124.53 629.022 2096.31 423.654C2068.08 218.285 2063.88 334.069 1744.41 336.471C1424.93 338.873 1361.88 499.204 1199.74 608.494C1037.6 717.784 1041.2 585.675 767.365 470.981C493.529 356.287 617.836 364.205 374.627 273.53Z"
              fill="#F97026"
              fill-opacity="0.55"
            />
          </g>
          <g
            style={{ mixBlendMode: "plus-lighter" }}
            filter="url(#filter1_f_438_11)"
          >
            <path
              d="M363.557 535.527C168.99 462.987 109.138 575.359 103.533 640.613C79.7127 679.445 31.5912 792.418 29.6696 933.654C27.2675 1110.2 -520.412 826.655 254.255 1260.81C1028.92 1694.97 1729.73 1315.57 1965.74 1203.27C2201.74 1090.98 2113.46 891.019 2085.24 685.65C2057.02 480.282 2052.81 596.066 1733.34 598.468C1413.86 600.869 1350.81 761.201 1188.67 870.491C1026.53 979.78 1030.13 847.672 756.295 732.978C482.459 618.284 606.766 626.201 363.557 535.527Z"
              fill="url(#paint0_linear_438_11)"
            />
          </g>
          <g filter="url(#filter2_f_438_11)">
            <path
              d="M103.533 699.655C109.138 634.401 168.99 522.029 363.557 594.569C537.726 659.503 778.322 811.878 1001.72 934.634C1004.88 934.643 1013.18 936.701 1027.74 941.278C1214.28 999.904 1413.86 659.911 1733.34 657.51C2052.81 655.108 2057.02 539.324 2085.24 744.692C2113.46 950.061 2201.74 1150.02 1965.74 1262.32C1729.73 1374.61 1028.92 1754.01 254.255 1319.85C-520.412 885.697 27.2675 1169.24 29.6696 992.696C31.5913 851.46 79.7127 738.487 103.533 699.655Z"
              fill="#F4BD8A"
            />
          </g>
          <g filter="url(#filter3_f_438_11)">
            <path
              d="M-100.632 699.61C-93.809 634.36 -20.9522 521.993 215.893 594.529C427.908 659.46 720.783 811.828 992.724 934.578C996.577 934.587 1006.67 936.645 1024.4 941.222C1251.47 999.846 1494.42 659.869 1883.32 657.467C2272.21 655.065 2277.33 539.287 2311.69 744.646C2346.04 950.004 2453.5 1149.96 2166.22 1262.25C1878.93 1374.53 1025.84 1753.91 82.8413 1319.78C-860.155 885.643 -193.469 1169.17 -190.545 992.637C-188.206 851.408 -129.628 738.441 -100.632 699.61Z"
              fill="#3B2921"
            />
          </g>
          <g filter="url(#filter4_f_438_11)">
            <path
              d="M-103.52 1061.61C-96.7582 996.36 -24.5562 883.993 210.161 956.529C420.27 1021.46 710.514 1173.83 980.01 1296.58C983.829 1296.59 993.834 1298.65 1011.4 1303.22C1236.43 1361.85 1477.2 1021.87 1862.6 1019.47C2248 1017.07 2253.07 901.287 2287.12 1106.65C2321.17 1312 2427.66 1511.96 2142.96 1624.25C1858.25 1736.53 1012.83 2115.91 78.3046 1681.78C-856.218 1247.64 -195.523 1531.17 -192.625 1354.64C-190.307 1213.41 -132.256 1100.44 -103.52 1061.61Z"
              fill="#1A1A1A"
            />
          </g>
          <g filter="url(#filter5_f_438_11)">
            <path
              d="M-166.52 1390.61C-159.758 1325.36 -87.5562 1212.99 147.161 1285.53C357.27 1350.46 647.514 1502.83 917.01 1625.58C920.829 1625.59 930.834 1627.65 948.403 1632.22C1173.43 1690.85 1414.2 1350.87 1799.6 1348.47C2185 1346.07 2190.07 1230.29 2224.12 1435.65C2258.17 1641 2364.66 1840.96 2079.96 1953.25C1795.25 2065.53 949.827 2444.91 15.3046 2010.78C-919.218 1576.64 -258.523 1860.17 -255.625 1683.64C-253.307 1542.41 -195.256 1429.44 -166.52 1390.61Z"
              fill="#161414"
            />
          </g>
          <defs>
            <filter
              id="filter0_f_438_11"
              x="-399.399"
              y="0"
              width="2785.4"
              height="1452.04"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_438_11"
              />
            </filter>
            <filter
              id="filter1_f_438_11"
              x="-410.469"
              y="261.997"
              width="2785.4"
              height="1452.04"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_438_11"
              />
            </filter>
            <filter
              id="filter2_f_438_11"
              x="-410.469"
              y="321.039"
              width="2785.4"
              height="1452.04"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_438_11"
              />
            </filter>
            <filter
              id="filter3_f_438_11"
              x="-672"
              y="321"
              width="3282"
              height="1452"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_438_11"
              />
            </filter>
            <filter
              id="filter4_f_438_11"
              x="-672"
              y="683"
              width="3257"
              height="1452"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_438_11"
              />
            </filter>
            <filter
              id="filter5_f_438_11"
              x="-735"
              y="1012"
              width="3257"
              height="1452"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="125"
                result="effect1_foregroundBlur_438_11"
              />
            </filter>
            <linearGradient
              id="paint0_linear_438_11"
              x1="1056.1"
              y1="755.881"
              x2="1056.1"
              y2="1499.28"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#ACADB1" />
              <stop offset="0.375" stop-color="#FBA874" />
            </linearGradient>
          </defs>
        </svg>
      </section>
      <Service />
      <HightlightSec />
      <HowWeWork />
      <Testimonial />
      <Pricing />
      <People />
      <Faqs />
      <Footer/>
    </ReactLenis>
  );
}

export default HeroSection;
