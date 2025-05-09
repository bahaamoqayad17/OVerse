const Loader = () => {
  return (
    <>
      <div>
        <svg
          class="loader"
          viewBox="0 0 128 128"
          width="128px"
          height="128px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#000"></stop>
              <stop offset="40%" stop-color="#fff"></stop>
              <stop offset="100%" stop-color="#fff"></stop>
            </linearGradient>
            <linearGradient id="grad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#000"></stop>
              <stop offset="60%" stop-color="#000"></stop>
              <stop offset="100%" stop-color="#fff"></stop>
            </linearGradient>
            <mask id="mask1">
              <rect
                x="0"
                y="0"
                width="128"
                height="128"
                fill="url(#grad1)"
              ></rect>
            </mask>
            <mask id="mask2">
              <rect
                x="0"
                y="0"
                width="128"
                height="128"
                fill="url(#grad2)"
              ></rect>
            </mask>
          </defs>
          <g fill="none" stroke-linecap="round" stroke-width="16">
            <circle
              class="loader_ring"
              r="56"
              cx="64"
              cy="64"
              stroke="#ddd"
            ></circle>
            <g stroke="hsl(223,90%,50%)">
              <path
                class="loader_worm1"
                d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                stroke="hsl(343,90%,50%)"
                stroke-dasharray="43.98 307.87"
              ></path>
              <g transform="translate(42,42)">
                <g class="loader_worm2" transform="translate(-42,0)">
                  <path
                    class="loader_worm2-1"
                    d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                    stroke-dasharray="43.98 175.92"
                  ></path>
                </g>
              </g>
            </g>
            <g stroke="hsl(283,90%,50%)" mask="url(#mask1)">
              <path
                class="loader_worm1"
                d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                stroke-dasharray="43.98 307.87"
              ></path>
              <g transform="translate(42,42)">
                <g class="loader_worm2" transform="translate(-42,0)">
                  <path
                    class="loader_worm2-1"
                    d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                    stroke-dasharray="43.98 175.92"
                  ></path>
                </g>
              </g>
            </g>
            <g stroke="hsl(343,90%,50%)" mask="url(#mask2)">
              <path
                class="loader_worm1"
                d="M120,64c0,30.928-25.072,56-56,56S8,94.928,8,64"
                stroke-dasharray="43.98 307.87"
              ></path>
              <g transform="translate(42,42)">
                <g class="loader_worm2" transform="translate(-42,0)">
                  <path
                    class="loader_worm2-1"
                    d="M8,22c0-7.732,6.268-14,14-14s14,6.268,14,14"
                    stroke-dasharray="43.98 175.92"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </>
  );
};

export default Loader;
