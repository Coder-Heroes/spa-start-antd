import React from 'react';
import Icon from '@ant-design/icons';

export const StudentIcon = props => {
  return (
    <Icon
      component={() => {
        return (
          <svg
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 1024 1024"
          >
            <path d="M969.6,313L535.2,163.6c-27.1-9.8-21.4-9.9-48.3-0.1L50,311.6c-26.9,9.7-26.7,25.5,0.4,35.3l103.8,35.2c-46,44.6-49,90.9-49.6,144.6c-17.8,6.8-30.4,24.1-30.4,44.3c0,18.5,10.6,34.6,26.1,42.4C93,668,71.9,730.4,10,804.3c30.6,23.7,46.4,31.6,70.2,39.5c86.6-37.2,76-136,69.3-234.3c11.9-8.6,19.6-22.6,19.6-38.4c0-16.9-8.9-31.8-22.3-40.2c1.5-52.6,13-99.7,52.4-130.2c0.3-0.8,1.2-1.5,2.9-2.2l298.6-120.7c11.1-4.4,23.7,0.9,28.1,12l0.4,1c4.4,11.1-0.9,23.7-12,28.1L264.8,419.7l225.8,76.6c27.1,9.8,21.4,9.9,48.3,0.1L970,348.3C996.8,338.6,996.7,322.8,969.6,313z M490,553.6L216.6,461v69.7c14.3,13.1,22.2,31.9,22.2,52.7c0,18.8-6.6,35.8-17.6,48.6c3.6,10.9,9.9,21.6,18.9,25c159.1,87.9,379,87,555.8-8.9c13.1-10.9,23.3-24.4,23.3-37.5V457.1l-280.8,96.7C511.6,563.5,517,563.4,490,553.6z" />
          </svg>
        );
      }}
      {...props}
    />
  );
};
export const TeacherIcon = props => {
  return (
    <Icon
      component={() => {
        return (
          <svg
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 820.000000 962.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,962.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path d="M135 9185 c-27 -26 -33 -72 -13 -108 6 -12 211 -346 456 -742 362 -586 442 -722 433 -735 -6 -8 -23 -39 -37 -69 -23 -47 -26 -62 -21 -125 6 -85 40 -172 165 -416 120 -235 485 -885 511 -913 5 -4 111 6 237 23 355 47 736 91 742 85 3 -3 15 -44 27 -93 l22 -87 -144 -1013 -144 -1012 -352 -523 c-193 -287 -360 -544 -371 -572 -14 -37 -19 -74 -19 -140 0 -149 50 -251 190 -385 43 -41 319 -311 613 -599 294 -289 595 -583 667 -654 l133 -130 -11 -176 c-13 -209 -8 -285 25 -356 121 -264 531 -302 746 -69 53 58 96 151 109 234 27 175 34 529 35 1622 1 1058 2 1128 18 1140 14 10 24 54 43 188 14 96 29 178 33 182 5 5 85 7 178 6 l169 -3 3 -1667 2 -1668 1674 0 c1517 0 1674 1 1680 16 3 9 6 760 6 1670 l0 1654 75 0 76 0 -3 147 -3 148 -1907 3 -1908 2 0 28 c0 32 27 212 33 218 2 2 19 -16 39 -39 20 -24 64 -58 99 -77 52 -28 77 -34 141 -38 138 -8 210 36 300 187 98 163 295 476 482 765 l187 289 -92 136 c-278 409 -562 796 -687 937 -115 129 -238 192 -449 229 -125 22 -175 20 -200 -7 -11 -13 -114 -164 -228 -336 -115 -171 -210 -310 -213 -308 -5 6 143 568 162 616 17 41 28 110 18 110 -4 0 -63 9 -132 19 -69 10 -127 17 -130 14 -2 -2 -3 -171 -1 -376 1 -225 -1 -368 -7 -362 -5 6 -39 109 -77 230 -37 121 -92 288 -121 370 -61 169 -79 194 -165 219 -66 20 -203 20 -289 1 -36 -8 -254 -28 -485 -44 -231 -17 -439 -33 -462 -35 l-42 -5 -64 102 c-128 201 -215 373 -291 569 -21 54 -51 117 -67 142 -59 88 -160 130 -296 124 l-67 -3 -451 729 c-248 400 -459 735 -470 742 -30 22 -83 17 -110 -11z m3556 -3418 c123 -82 62 -267 -84 -254 -40 3 -56 11 -85 41 -34 34 -37 41 -37 96 0 52 4 63 30 90 17 18 39 36 50 40 38 16 91 11 126 -13z m954 -177 c45 -69 90 -139 100 -156 l17 -31 -198 -346 c-110 -191 -200 -343 -202 -339 -1 5 29 232 68 506 38 273 70 512 70 529 l1 32 30 -35 c17 -19 68 -91 114 -160z m-1010 -240 c106 -65 73 -233 -50 -256 -94 -17 -184 78 -161 170 8 31 53 85 80 96 38 15 98 11 131 -10z m-393 -1859 c3 -3 2 -143 -4 -311 -5 -168 -8 -450 -6 -627 4 -256 2 -321 -8 -315 -23 13 -564 553 -564 563 0 6 106 168 236 361 l236 350 52 -7 c28 -4 54 -10 58 -14z" />
              <path d="M3651 8255 c-180 -40 -366 -187 -448 -355 -56 -116 -77 -217 -70 -339 17 -295 216 -541 497 -617 87 -23 253 -24 340 -1 235 62 423 250 487 487 27 103 23 264 -10 365 -75 228 -253 397 -483 455 -91 23 -218 25 -313 5z" />
            </g>
          </svg>
        );
      }}
      {...props}
    />
  );
};
export const CalendarIcon = props => {
  return (
    <Icon
      component={() => {
        return (
          <svg
            width="1.5em"
            height="1.5em"
            fill="currentColor"
            viewBox="0 0 800.000000 566.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g
              transform="translate(0.000000,566.000000) scale(0.100000,-0.100000)"
              stroke="none"
            >
              <path d="M2933 4815 c-60 -26 -73 -63 -73 -206 0 -92 -3 -128 -12 -132 -7 -2 -61 -5 -121 -6 -62 -1 -129 -9 -160 -18 -196 -58 -350 -224 -387 -418 -8 -43 -10 -440 -8 -1415 l3 -1355 28 -71 c58 -146 180 -266 330 -325 l62 -24 1378 -3 c1499 -3 1440 -5 1560 53 121 58 223 171 278 310 l24 60 3 1363 c2 1198 1 1370 -13 1429 -55 235 -275 412 -515 413 -41 1 -94 3 -117 7 l-43 5 0 127 c0 144 -11 175 -73 204 -45 22 -84 21 -126 -1 -59 -32 -71 -68 -71 -215 l0 -128 -872 3 -873 3 -5 135 c-6 151 -15 176 -75 204 -40 19 -79 20 -122 1z m-73 -785 c0 -190 6 -216 63 -250 66 -41 158 -14 191 54 13 27 16 68 16 200 l0 166 875 0 875 0 0 -168 c0 -143 3 -172 18 -201 48 -89 180 -94 232 -8 18 28 20 51 20 205 l0 172 103 -1 c56 0 116 -6 134 -12 65 -24 119 -73 149 -133 l29 -59 3 -272 3 -273 -1566 0 -1566 0 3 273 c3 309 7 328 88 405 56 55 104 70 228 71 l102 1 0 -170z m2710 -1763 c0 -1047 5 -983 -84 -1073 -91 -91 25 -84 -1481 -84 -1506 0 -1390 -7 -1481 84 -89 90 -84 26 -84 1073 l0 913 1565 0 1565 0 0 -913z" />
              <path d="M2740 2610 l0 -320 320 0 320 0 2 288 c1 158 2 301 2 317 l1 30 -322 3 -323 2 0 -320z" />
              <path d="M3660 2610 l0 -320 335 0 335 0 0 320 0 320 -335 0 -335 0 0 -320z" />
              <path d="M4605 2917 c-3 -7 -4 -149 -3 -317 l3 -305 333 -3 332 -2 0 320 0 320 -330 0 c-257 0 -332 -3 -335 -13z" />
              <path d="M2740 1705 l0 -315 323 0 322 0 0 315 0 315 -322 0 -323 0 0 -315z" />
              <path d="M3660 1705 l0 -315 335 0 335 0 0 315 0 315 -335 0 -335 0 0 -315z" />
              <path d="M4600 1705 l0 -315 335 0 335 0 0 315 0 315 -335 0 -335 0 0 -315z" />
            </g>
          </svg>
        );
      }}
      {...props}
    />
  );
};
export const ProfileIcon = props => {
  return (
    <Icon
      component={() => {
        return (
          <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor">
            <g id="Iconly/Curved/Profile">
              <g id="Profile">
                <path
                  id="Stroke 1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Stroke 3"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z"
                  stroke="#130F26"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        );
      }}
      {...props}
    />
  );
};

export const HamburgerMenuIcon = props => {
  return (
    <Icon
      component={() => {
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35px"
            height="35px"
            viewBox="0 0 15 15"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
              fill="currentColor"
            />
          </svg>
        );
      }}
      {...props}
    />
  );
};
