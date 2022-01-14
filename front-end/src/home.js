import React, { useState, useEffect } from 'react';
import serviceGetAllProducts from './service/serviceGetAllProducts'
import './styles/App.css';

function Home() {
  const [listproducts, setListProducts] = useState([]);


  useEffect(() => {
    async function fetchProducts() {
      const { products } = await serviceGetAllProducts()
      setListProducts(products);
    }
    fetchProducts();
  }, [])

  return (
    <main>
      <div className="info-store">
        <h1>Fish Store</h1>
        <p>A fish store é onde você encontra de tudo melhor para sua pescaria, trazendo os melhores produtos para pesca Fornecemos iscas anzóis varas de pescas, carretilha e motores para embarcação.</p>
        <div className="cont-svg">
          <svg width="1065" height="799" viewBox="0 0 1065 799" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_714_73)">
              <path opacity="0.1" d="M42.0899 186.01C20.7999 222.27 35.1599 267.53 38.6499 309.29C40.7687 334.813 38.5472 360.51 32.0799 385.29C22.8999 420.47 5.3099 453.47 0.8099 489.47C-3.6901 525.47 10.2099 567.89 44.7399 580.41C53.3099 583.52 62.5799 584.57 70.9199 588.25C93.5399 598.25 103.57 625.01 104.34 649.43C105.11 673.85 99.0299 698.14 100.13 722.55C100.75 736.29 104.02 750.64 113.47 760.75C122.16 770.04 134.8 774.49 146.97 778.45C185.45 790.98 225.63 802.06 265.97 798.19C306.31 794.32 347.2 772.5 362.7 735.59C368.31 722.23 370.39 707.59 376.03 694.27C381.67 680.95 392.35 668.16 406.87 666.07C415.35 664.85 423.87 667.43 432.05 669.97L549.31 706.47C567.31 712.08 587.51 717.56 604.41 709.25C613.1 704.97 619.69 697.54 626.03 690.25C676.13 633 728.33 570.91 737.5 495.84C740.73 469.39 738.36 442.48 741.95 416.08C745.54 389.68 756.53 362.33 779.34 348.08C796.93 337.08 818.7 335.43 839.42 333.21C872.96 329.61 906.71 323.51 937.13 309.14C967.55 294.77 994.62 271.32 1007.57 240.62C1011.4 231.54 1013.97 221.49 1011.81 211.9C1007.95 194.79 990.74 184.31 974.61 176.9C926.37 154.9 874.05 143.12 821.94 132.75C798.04 127.99 773.94 123.48 749.52 123.75C728.41 123.97 707.52 127.75 686.73 131.34C508.69 161.95 316.31 181.28 137.62 143.96C100.15 136.13 62.4999 151.24 42.0899 186.01Z" fill="#FFDD0B" />
              <path opacity="0.4" d="M296.78 115.79C296.78 115.79 512.02 47.26 596.61 97.59C654.79 132.2 785.89 122.25 862.1 112.65C904.255 107.334 947.07 111.986 987.1 126.23C1025.67 139.97 1066.22 156.56 1064.52 165.05C1061.31 181.11 296.78 171.47 296.78 171.47V115.79Z" fill="#FFDD0B" />
              <path d="M805.43 427.24L804.63 427.31L804.88 426.69L803.88 427.1L804.88 424.47C804.88 424.47 801.63 425.78 795.61 427.92C647.8 434.81 338.51 309.4 338.51 309.4L167.31 332.91C166.315 331.981 165.374 330.996 164.49 329.96L165.25 333.05C164.983 332.757 164.73 332.467 164.49 332.18L164.76 333.26H164.49L164.91 333.84L184.5 413.3C184.5 413.3 533.62 605.66 743.73 581.21L803.54 430.05L805.43 427.24Z" fill="url(#paint0_linear_714_73)" />
              <path d="M343.9 314.47C343.9 314.47 655.51 440.79 793.65 427.94L701.56 565.01L368.56 461.14L205.76 387.25L281.76 335.85L343.9 314.47Z" fill="#FFDD0B" />
              <path opacity="0.1" d="M343.9 314.47C343.9 314.47 655.51 440.79 793.65 427.94L701.56 565.01L368.56 461.14L205.76 387.25L281.76 335.85L343.9 314.47Z" fill="black" />
              <path opacity="0.1" d="M331.58 352.45L414.57 371.19L245.38 401.17L205.76 365.83L331.58 352.45Z" fill="white" />
              <path opacity="0.1" d="M368.52 429.01L466.51 393.14L535.58 416.16L414.57 461.14L368.52 429.01Z" fill="white" />
              <path opacity="0.1" d="M503.45 469.7L611.07 440.26L706.91 466.49L605.18 500.76L503.45 469.7Z" fill="white" />
              <path d="M176.31 337.46L343.9 314.44V355.13L203.62 375.47L176.31 337.46Z" fill="#FFDD0B" />
              <path opacity="0.1" d="M177.38 339.6L343.9 314.44V355.13L203.62 375.47L177.38 339.6Z" fill="white" />
              <path d="M28 203.6C28.0094 187.211 33.5405 171.303 43.7007 158.443C53.8609 145.583 68.0576 136.521 84 132.72C153.73 115.99 270.67 95.7199 327.87 129.72C412.47 180.05 651.26 136.14 651.26 136.14C651.26 136.14 799.03 181.14 795.82 197.14C792.61 213.14 28.03 203.56 28.03 203.56L28 203.6Z" fill="#FFDD0B" />
              <path d="M618.73 146.57C620.57 144.86 622.3 142.84 622.83 140.38C623.36 137.92 622.31 134.97 619.96 134.07C617.33 133.07 614.51 134.89 612.38 136.73C610.25 138.57 607.8 140.68 605.01 140.29C606.447 138.987 607.522 137.334 608.13 135.492C608.738 133.65 608.858 131.682 608.48 129.78C608.347 128.992 608.001 128.256 607.48 127.65C606.02 126.09 603.37 126.76 601.62 127.99C596.05 131.91 594.5 139.47 594.47 146.28C593.91 143.82 594.38 141.28 594.37 138.75C594.36 136.22 593.67 133.44 591.54 132.09C590.216 131.383 588.73 131.038 587.23 131.09C584.73 131 581.94 131.25 580.23 133.09C578.11 135.36 578.66 139.18 580.5 141.69C582.34 144.2 585.16 145.76 587.75 147.49C589.826 148.726 591.597 150.415 592.93 152.43C593.085 152.71 593.212 153.005 593.31 153.31H609C612.534 151.515 615.807 149.247 618.73 146.57V146.57Z" fill="#FFDD0B" />
              <path d="M273.93 112.3C275.77 110.59 277.5 108.57 278.03 106.11C278.56 103.65 277.51 100.7 275.16 99.8C272.53 98.8 269.71 100.62 267.58 102.46C265.45 104.3 263 106.41 260.21 106.02C261.653 104.713 262.732 103.054 263.34 101.204C263.949 99.3544 264.066 97.3785 263.68 95.47C263.547 94.6823 263.201 93.9458 262.68 93.34C261.22 91.78 258.57 92.4501 256.82 93.6801C251.25 97.6001 249.7 105.16 249.67 111.97C249.11 109.51 249.58 106.97 249.57 104.44C249.56 101.91 248.87 99.13 246.74 97.78C245.416 97.073 243.93 96.728 242.43 96.78C239.93 96.69 237.14 96.94 235.43 98.78C233.31 101.05 233.86 104.87 235.7 107.38C237.54 109.89 240.36 111.45 242.95 113.18C245.026 114.416 246.797 116.105 248.13 118.12C248.285 118.4 248.412 118.695 248.51 119H264.2C267.731 117.217 271.005 114.963 273.93 112.3V112.3Z" fill="#FFDD0B" />
              <path d="M785.78 186.19C787.62 184.48 789.35 182.46 789.88 180C790.41 177.54 789.36 174.59 787.01 173.69C784.38 172.69 781.56 174.51 779.43 176.35C777.3 178.19 774.85 180.3 772.06 179.91C773.497 178.607 774.572 176.954 775.18 175.112C775.788 173.27 775.909 171.302 775.53 169.4C775.397 168.612 775.051 167.876 774.53 167.27C773.07 165.71 770.42 166.38 768.67 167.61C763.1 171.53 761.55 179.09 761.52 185.9C760.96 183.44 761.43 180.9 761.42 178.37C761.41 175.84 760.72 173.06 758.59 171.71C757.267 171.003 755.78 170.658 754.28 170.71C751.78 170.62 748.99 170.87 747.28 172.71C745.16 174.98 745.71 178.8 747.55 181.31C749.39 183.82 752.21 185.38 754.8 187.11C756.876 188.346 758.647 190.035 759.98 192.05C760.135 192.33 760.263 192.625 760.36 192.93H776.05C779.584 191.135 782.857 188.867 785.78 186.19V186.19Z" fill="#FFDD0B" />
              <path d="M588.99 507.47C578.99 497.6 571.08 485.88 566.9 472.52C563.69 462.23 560.82 452.18 560.82 448.93C560.82 443.24 552.91 421.83 543.14 411.51C542.8 411.15 542.45 410.8 542.14 410.51C540.44 403.79 537.05 386.84 542.93 376.32C544.368 373.751 545.569 371.057 546.52 368.27C550.044 357.482 555.462 347.408 562.52 338.52C563.935 336.811 565.187 334.973 566.26 333.03C568.71 333.45 570.15 332.77 569.85 330.36C569.85 330.27 569.85 330.18 569.85 330.09C570.98 329.83 571.57 329.01 571.37 327.4C569.88 315.54 575.85 278.47 575.85 278.47C581.518 261.746 584.021 244.111 583.23 226.47C581.74 198.3 551.87 192.37 551.87 192.37L549.4 194.82C547.4 193.59 545.16 192.21 542.89 190.75C543.343 190.554 543.753 190.27 544.096 189.915C544.44 189.559 544.709 189.14 544.89 188.68C547.48 183.31 547.61 175.95 547.98 170.13C548.198 168.252 548.11 166.35 547.72 164.5C547.242 162.919 546.468 161.443 545.44 160.15C543.13 157.108 540.18 154.612 536.798 152.837C533.416 151.062 529.685 150.053 525.87 149.88C523.39 149.78 520.87 150.04 518.44 150.04C513.88 150.04 509.32 149.16 504.78 149.54C500.24 149.92 495.44 151.92 493.43 155.99C492.17 158.54 492.16 161.61 490.67 163.99C488.95 166.78 485.6 168.2 483.67 170.85C482.615 172.304 482.045 174.054 482.04 175.85C482.012 176.434 482.133 177.015 482.39 177.54C482.848 178.173 483.413 178.722 484.06 179.16C485.163 180.163 485.892 181.512 486.124 182.985C486.357 184.458 486.08 185.966 485.34 187.26C486.881 187.548 488.304 188.283 489.431 189.373C490.558 190.462 491.34 191.859 491.68 193.39C491.712 193.904 491.901 194.396 492.22 194.8C492.506 195.034 492.853 195.18 493.22 195.22C496.13 195.72 499.07 194.35 501.27 192.38C501.45 192.71 501.62 193.03 501.82 193.38C504.443 197.684 508.528 200.902 513.327 202.444C518.126 203.986 523.32 203.75 527.96 201.78C528.373 202.3 528.78 202.837 529.18 203.39C530.839 205.687 532.203 208.183 533.24 210.82L530.94 213.1C528.919 216.27 527.099 219.563 525.49 222.96C521.763 230.073 519.031 237.664 517.37 245.52C511.95 250.88 503.57 260.52 502.57 269.44C502.57 269.44 463.74 288.72 453.29 278.34C442.84 267.96 429.4 285.75 432.38 288.72C435.36 291.69 444.33 297.62 454.78 291.72H496.61C502.973 290.872 509.097 288.738 514.61 285.45C513.87 287.45 512.95 289.52 511.93 291.63C510.36 294.63 508.67 297.63 507.09 300.32C506.22 301.03 505.36 301.72 504.5 302.38C499.15 304.59 492.42 307.38 485.43 310.38C481.575 311.201 477.92 312.771 474.67 315C458.53 322 443.92 328.82 444.35 330.24C443.27 330.95 442.71 331.48 442.86 331.76C443.01 332.04 443.14 332.38 443.35 332.9C442.2 337.13 441.98 345.78 444.35 362.9C450.35 405.9 436.88 413.31 436.88 413.31C436.88 413.31 426.43 426.65 414.48 425.17C402.53 423.69 412.99 435.55 423.48 434.07C430.53 433.07 445.75 432.07 454.89 431.52C455.716 431.47 456.52 431.237 457.245 430.839C457.97 430.442 458.598 429.889 459.085 429.22C459.571 428.551 459.904 427.783 460.058 426.97C460.213 426.158 460.186 425.321 459.98 424.52C458.251 417.965 458.025 411.104 459.32 404.45C461.57 393.29 467.2 372.05 469.21 360.32V360.19C472.21 357.19 477.8 353.06 484.69 354.04C488.28 354.55 494.69 351.2 501.57 346.6C497.97 367.09 495.22 389.1 498.13 397.04C504.13 413.35 510.08 420.76 510.08 420.76C510.08 420.76 512.95 420.89 516.98 420.84L518.91 423.84L545.91 465.28C545.91 465.28 569.8 499.38 547.4 503.83C547.4 503.83 529.48 508.28 536.95 514.21C536.95 514.21 589.22 515.69 590.71 511.21C591.07 510.06 590.31 508.77 588.99 507.47Z" fill="url(#paint1_linear_714_73)" />
              <path d="M556.21 201.27C556.21 201.27 535.89 241.91 534.44 221.59C534.019 215.547 531.917 209.741 528.37 204.83C524.658 199.673 519.774 195.471 514.12 192.57C514.12 192.57 525.73 170.8 524.28 176.57C523.54 179.57 531.89 185.92 540.28 191.45C548.23 196.76 556.21 201.27 556.21 201.27Z" fill="#FFB9B9" />
              <path d="M460.42 401.57C459.16 408.085 459.379 414.8 461.06 421.22C461.27 422.003 461.304 422.824 461.159 423.622C461.014 424.419 460.694 425.175 460.221 425.834C459.748 426.494 459.135 427.04 458.426 427.433C457.717 427.827 456.929 428.058 456.12 428.11C447.23 428.64 432.44 429.62 425.59 430.6C415.43 432.05 405.27 420.44 416.88 421.89C428.49 423.34 438.65 410.28 438.65 410.28C438.65 410.28 451.71 403.02 445.91 360.93C443.6 344.18 443.82 335.7 444.91 331.57C445.122 330.521 445.585 329.54 446.26 328.71C446.26 328.71 446.26 328.71 446.26 328.71C446.564 328.361 446.969 328.116 447.42 328.01C447.93 327.96 448.445 328.024 448.927 328.197C449.409 328.37 449.848 328.648 450.21 329.01C450.21 329.01 469.08 346.43 470.53 350.78C470.89 351.85 470.63 354.63 469.98 358.39C468.08 369.86 462.61 390.64 460.42 401.57Z" fill="#FFB9B9" />
              <path opacity="0.05" d="M460.42 401.57C459.16 408.085 459.379 414.8 461.06 421.22C461.27 422.003 461.304 422.824 461.159 423.622C461.014 424.419 460.694 425.175 460.221 425.834C459.748 426.494 459.135 427.04 458.426 427.433C457.717 427.827 456.929 428.058 456.12 428.11C447.23 428.64 432.44 429.62 425.59 430.6C415.43 432.05 405.27 420.44 416.88 421.89C428.49 423.34 438.65 410.28 438.65 410.28C438.65 410.28 451.71 403.02 445.91 360.93C443.6 344.18 443.82 335.7 444.91 331.57C445.122 330.521 445.585 329.54 446.26 328.71C446.26 328.71 446.26 328.71 446.26 328.71C446.564 328.361 446.969 328.116 447.42 328.01C447.93 327.96 448.445 328.024 448.927 328.197C449.409 328.37 449.848 328.648 450.21 329.01C450.21 329.01 469.08 346.43 470.53 350.78C470.89 351.85 470.63 354.63 469.98 358.39C468.08 369.86 462.61 390.64 460.42 401.57Z" fill="black" />
              <path d="M588.15 506.08C586.7 510.43 535.9 508.98 535.9 508.98C528.64 503.17 546.06 498.82 546.06 498.82C567.83 494.47 544.61 461.08 544.61 461.08L518.31 420.47L512.64 411.69C512.64 411.69 519.9 401.53 532.96 402.98C535.96 403.31 539.03 405.37 541.9 408.44C551.39 418.54 559.09 439.5 559.09 445.07C559.09 448.25 561.88 458.07 565 468.16C569.06 481.24 576.79 492.7 586.47 502.37C587.78 503.72 588.51 504.99 588.15 506.08Z" fill="#FFB9B9" />
              <path opacity="0.1" d="M470.03 358.38C468.622 359.571 467.347 360.912 466.23 362.38C455.53 361.04 447.3 337.53 444.94 331.57C444.74 331.06 444.58 330.68 444.46 330.45C444.34 330.22 444.97 329.54 446.29 328.71L447.45 328.01C447.96 327.96 448.475 328.024 448.957 328.197C449.44 328.37 449.878 328.648 450.24 329.01C450.24 329.01 469.11 346.43 470.56 350.78C470.94 351.85 470.68 354.62 470.03 358.38Z" fill="black" />
              <path d="M515.57 297.07C515.57 297.07 444.45 326.07 445.9 329C447.35 331.93 456.06 359.48 467.67 360.93C467.67 360.93 474.93 350.77 485.09 352.22C495.25 353.67 528.63 323.22 528.63 323.22L551.85 305.8L515.57 297.07Z" fill="#4C4C78" />
              <path opacity="0.05" d="M515.57 297.07C515.57 297.07 444.45 326.07 445.9 329C447.35 331.93 456.06 359.48 467.67 360.93C467.67 360.93 474.93 350.77 485.09 352.22C495.25 353.67 528.63 323.22 528.63 323.22L551.85 305.8L515.57 297.07Z" fill="black" />
              <path opacity="0.1" d="M543.15 413.18C543.15 419.23 527.75 420.38 518.34 420.51L512.67 411.73C512.67 411.73 519.93 401.57 532.99 403.02C535.99 403.35 539.06 405.41 541.93 408.48C542.59 411.37 543.15 413.18 543.15 413.18Z" fill="black" />
              <path d="M509.77 304.33C509.77 304.33 492.35 378.33 498.16 394.33C503.97 410.33 509.77 417.55 509.77 417.55C509.77 417.55 541.7 419 541.7 410.29C541.7 410.29 534.44 387.07 541.7 374C543.098 371.484 544.266 368.846 545.19 366.12C548.597 355.569 553.848 345.707 560.7 336.99C564.23 332.63 566.93 327.7 566.37 323.2C564.92 311.58 509.77 304.33 509.77 304.33Z" fill="#4C4C78" />
              <path d="M521.38 241.91C521.38 241.91 503.96 256.47 502.51 269.47C502.51 269.47 464.77 288.34 454.61 278.18C444.45 268.02 431.39 285.47 434.31 288.36C437.23 291.25 445.92 297.07 456.08 291.26H496.71C496.71 291.26 524.29 288.36 525.71 266.59C527.13 244.82 521.38 241.91 521.38 241.91Z" fill="#FFB9B9" />
              <path opacity="0.05" d="M521.38 241.91C521.38 241.91 503.96 256.47 502.51 269.47C502.51 269.47 464.77 288.34 454.61 278.18C444.45 268.02 431.39 285.47 434.31 288.36C437.23 291.25 445.92 297.07 456.08 291.26H496.71C496.71 291.26 524.29 288.36 525.71 266.59C527.13 244.82 521.38 241.91 521.38 241.91Z" fill="black" />
              <path opacity="0.1" d="M536.62 190.39C536.36 191.33 537.01 189.52 536.62 190.39C534.5 195.19 533.24 202.83 528.38 204.83C524.668 199.673 519.784 195.471 514.13 192.57C514.13 192.57 525.74 170.8 524.29 176.57C523.54 179.56 528.31 184.86 536.62 190.39Z" fill="black" />
              <path d="M539.52 184.58C539.52 188.599 538.328 192.528 536.095 195.869C533.863 199.211 530.689 201.815 526.976 203.353C523.263 204.891 519.177 205.294 515.236 204.509C511.294 203.725 507.673 201.79 504.831 198.948C501.99 196.107 500.054 192.486 499.27 188.544C498.486 184.602 498.889 180.517 500.427 176.804C501.965 173.091 504.569 169.917 507.911 167.684C511.252 165.452 515.181 164.26 519.2 164.26C521.873 164.243 524.523 164.756 526.996 165.772C529.47 166.787 531.716 168.283 533.607 170.173C535.497 172.063 536.993 174.31 538.008 176.783C539.023 179.257 539.537 181.907 539.52 184.58Z" fill="#FFB9B9" />
              <path opacity="0.1" d="M528.64 217.24L548.96 196.92C548.96 196.92 577.96 202.73 579.44 230.3C580.169 247.536 577.708 264.758 572.18 281.1C572.18 281.1 566.37 317.39 567.83 329C569.29 340.61 530.09 311.58 530.09 311.58C530.09 311.58 498.16 317.39 499.61 313.03C501.06 308.67 518.48 284.03 515.61 275.29C514.36 271.54 514.72 263.23 515.54 254.97C516.901 241.535 521.398 228.608 528.67 217.23L528.64 217.24Z" fill="black" />
              <path d="M573.63 278.2C573.63 278.2 567.83 314.47 569.31 326.1C570.79 337.73 531.57 308.68 531.57 308.68C531.57 308.68 526.57 309.59 520.57 310.42C511.5 311.68 500.21 312.76 501.08 310.13C501.311 309.513 501.588 308.915 501.91 308.34C505.7 301.18 519.68 280.25 517.05 272.34C515.8 268.6 516.16 260.28 516.98 252.02C518.347 238.585 522.848 225.659 530.12 214.28L550.44 193.96C550.44 193.96 579.44 199.77 580.92 227.34C581.647 244.598 579.176 261.841 573.63 278.2V278.2Z" fill="#CBCDDA" />
              <path opacity="0.1" d="M539.52 184.58C539.525 187.393 538.943 190.176 537.81 192.75C536.08 191.327 534.584 189.639 533.38 187.75C531.646 185.068 529.756 182.49 527.72 180.03C527.282 179.406 526.67 178.926 525.96 178.65C524.62 178.27 523.26 179.49 522.88 180.84C522.647 182.22 522.647 183.63 522.88 185.01C522.994 185.703 522.955 186.413 522.767 187.09C522.579 187.767 522.245 188.395 521.79 188.93C520.06 190.54 517.26 189.42 515.29 188.1C513.32 186.78 510.85 185.31 508.76 186.42C507.982 186.91 507.326 187.57 506.84 188.35C505.342 190.716 503.646 192.951 501.77 195.03C500.158 192.345 499.188 189.323 498.936 186.201C498.684 183.079 499.158 179.942 500.319 177.033C501.481 174.124 503.299 171.523 505.632 169.433C507.965 167.343 510.749 165.821 513.768 164.985C516.786 164.149 519.957 164.023 523.033 164.615C526.108 165.207 529.005 166.503 531.498 168.4C533.99 170.297 536.01 172.744 537.4 175.551C538.79 178.358 539.512 181.448 539.51 184.58H539.52Z" fill="black" />
              <path d="M546.62 172.25C546.833 170.412 546.748 168.551 546.37 166.74C545.907 165.197 545.157 163.755 544.16 162.49C541.928 159.519 539.067 157.078 535.783 155.339C532.499 153.6 528.872 152.607 525.16 152.43C522.75 152.34 520.35 152.59 517.94 152.59C513.51 152.59 509.08 151.73 504.66 152.1C500.24 152.47 495.58 154.43 493.66 158.41C492.44 160.91 492.43 163.91 490.98 166.28C489.31 169.01 486.05 170.4 484.18 173C483.157 174.426 482.604 176.135 482.6 177.89C482.574 178.46 482.691 179.027 482.94 179.54C483.384 180.157 483.932 180.692 484.56 181.12C485.634 182.106 486.341 183.428 486.566 184.868C486.792 186.309 486.522 187.783 485.8 189.05C487.304 189.331 488.691 190.051 489.787 191.119C490.883 192.186 491.639 193.554 491.96 195.05C491.99 195.552 492.171 196.033 492.48 196.43C492.765 196.663 493.113 196.806 493.48 196.84C496.39 197.35 499.35 195.91 501.48 193.89C503.61 191.87 505.17 189.29 506.88 186.89C507.359 186.108 508.013 185.447 508.79 184.96C510.88 183.85 513.34 185.34 515.31 186.65C517.28 187.96 520.09 189.08 521.82 187.46C522.276 186.927 522.609 186.301 522.798 185.626C522.986 184.95 523.024 184.242 522.91 183.55C522.674 182.17 522.674 180.76 522.91 179.38C523.29 178.03 524.64 176.81 525.99 177.19C526.696 177.469 527.302 177.953 527.73 178.58C529.771 181.039 531.664 183.617 533.4 186.3C535.28 189.21 540.9 196.1 543.64 190.39C546.14 185.15 546.31 177.94 546.62 172.25Z" fill="#B96B6B" />
              <path opacity="0.1" d="M516.31 271.67C516.31 271.67 538.08 270.22 543.89 274.57C549.7 278.92 572.89 277.47 572.89 277.47" fill="black" />
              <path opacity="0.05" d="M564.92 263.69C564.92 263.69 557.66 278.2 557.66 282.56C557.66 286.92 551.85 292.72 551.85 292.72C551.85 292.72 535.45 301.72 520.54 310.43C511.47 311.69 500.18 312.77 501.05 310.14C501.281 309.523 501.558 308.925 501.88 308.35C517.35 298.93 538.79 272.35 538.79 272.35C538.79 259.29 546.05 236.06 546.05 236.06C546.05 236.06 563.47 227.35 569.27 236.06C575.07 244.77 564.92 263.69 564.92 263.69Z" fill="black" />
              <path opacity="0.1" d="M176.31 334.24L195.58 412.41C195.58 412.41 531.83 597.67 734.22 574.11L793.12 425.26C793.12 425.26 647.96 483.94 493.92 456.96C488.017 455.914 482.18 454.521 476.44 452.79C430.41 439.01 207.02 370.71 176.31 334.24Z" fill="black" />
              <path d="M176.31 336.38L195.58 414.55C195.58 414.55 531.82 599.8 734.21 576.25L793.11 427.4C793.11 427.4 647.95 486.08 493.91 459.1C488.007 458.054 482.17 456.661 476.43 454.93C430.41 441.15 207.02 372.85 176.31 336.38Z" fill="#FFDD0B" />
              <path d="M292.797 149.362L287.964 155.097L501.046 334.657L505.879 328.922L292.797 149.362Z" fill="#535461" />
              <path d="M543.15 233.21C543.15 233.21 535.89 256.47 535.89 269.47C535.89 269.47 505.41 307.21 490.89 308.66C476.37 310.11 467.67 318.82 473.47 321.72C479.27 324.62 486.53 328.98 495.24 321.72C503.95 314.46 548.94 289.79 548.94 289.79C548.94 289.79 554.75 283.98 554.75 279.63C554.75 275.28 562.01 260.76 562.01 260.76C562.01 260.76 572.17 241.89 566.36 233.18C560.55 224.47 543.15 233.21 543.15 233.21Z" fill="#FFB9B9" />
              <path opacity="0.1" d="M560.57 209.98C560.57 209.98 534.44 207.08 538.8 244.81C538.8 244.81 556.22 234.65 570.73 244.81C570.73 244.82 576.53 217.24 560.57 209.98Z" fill="black" />
              <path d="M560.57 207.08C560.57 207.08 534.44 204.18 538.8 241.91C538.8 241.91 556.22 231.75 570.73 241.91C570.73 241.91 576.53 214.34 560.57 207.08Z" fill="#CBCDDA" />
              <path d="M296.78 158.86L288.21 589.1" stroke="#535461" strokeWidth="2" strokeMiterlimit="10" />
              <path opacity="0.15" d="M266.8 558.04C266.8 558.04 234.68 577.31 255.02 620.15" stroke="#6C63FF" strokeMiterlimit="10" />
              <path opacity="0.15" d="M281.79 565.54C281.79 565.54 249.67 584.81 270.01 627.65" stroke="#6C63FF" strokeMiterlimit="10" />
              <path opacity="0.15" d="M298.92 558.04C298.92 558.04 331.04 577.31 310.7 620.15" stroke="#6C63FF" strokeMiterlimit="10" />
              <path opacity="0.15" d="M287.14 568.75C287.14 568.75 319.26 588.02 298.92 630.86" stroke="#6C63FF" strokeMiterlimit="10" />
              <path opacity="0.1" d="M158.88 58.47H151.51C152.878 58.47 154.191 57.9264 155.159 56.9587C156.126 55.991 156.67 54.6785 156.67 53.31C156.67 51.9415 156.126 50.629 155.159 49.6614C154.191 48.6937 152.878 48.15 151.51 48.15H91.83C91.1524 48.15 90.4814 48.2835 89.8553 48.5428C89.2293 48.8021 88.6604 49.1822 88.1813 49.6614C87.7021 50.1405 87.3221 50.7093 87.0627 51.3354C86.8034 51.9614 86.67 52.6324 86.67 53.31C86.67 53.9876 86.8034 54.6586 87.0627 55.2847C87.3221 55.9107 87.7021 56.4795 88.1813 56.9587C88.6604 57.4378 89.2293 57.8179 89.8553 58.0772C90.4814 58.3366 91.1524 58.47 91.83 58.47H99.2C97.8314 58.47 96.519 59.0137 95.5513 59.9814C94.5836 60.949 94.04 62.2615 94.04 63.63C94.04 64.9985 94.5836 66.311 95.5513 67.2787C96.519 68.2464 97.8314 68.79 99.2 68.79H88.88C87.5115 68.79 86.199 69.3337 85.2313 70.3014C84.2636 71.269 83.72 72.5815 83.72 73.95C83.72 75.3185 84.2636 76.631 85.2313 77.5987C86.199 78.5664 87.5115 79.11 88.88 79.11H148.56C149.928 79.11 151.241 78.5664 152.209 77.5987C153.176 76.631 153.72 75.3185 153.72 73.95C153.72 72.5815 153.176 71.269 152.209 70.3014C151.241 69.3337 149.928 68.79 148.56 68.79H158.88C160.248 68.79 161.561 68.2464 162.529 67.2787C163.496 66.311 164.04 64.9985 164.04 63.63C164.04 62.2615 163.496 60.949 162.529 59.9814C161.561 59.0137 160.248 58.47 158.88 58.47V58.47Z" fill="#FFDD0B" />
              <path opacity="0.1" d="M566.86 10.31H559.49C560.858 10.31 562.171 9.76635 563.139 8.79866C564.106 7.83097 564.65 6.51851 564.65 5.14999C564.65 3.78147 564.106 2.46901 563.139 1.50132C562.171 0.533632 560.858 -0.0100098 559.49 -0.0100098H499.81C498.441 -0.0100098 497.129 0.533632 496.161 1.50132C495.194 2.46901 494.65 3.78147 494.65 5.14999C494.65 6.51851 495.194 7.83097 496.161 8.79866C497.129 9.76635 498.441 10.31 499.81 10.31H507.18C506.502 10.31 505.831 10.4435 505.205 10.7028C504.579 10.9621 504.01 11.3422 503.531 11.8213C503.052 12.3005 502.672 12.8693 502.413 13.4953C502.153 14.1214 502.02 14.7924 502.02 15.47C502.02 16.1476 502.153 16.8186 502.413 17.4446C502.672 18.0707 503.052 18.6395 503.531 19.1187C504.01 19.5978 504.579 19.9779 505.205 20.2372C505.831 20.4965 506.502 20.63 507.18 20.63H496.87C496.192 20.63 495.521 20.7635 494.895 21.0228C494.269 21.2821 493.7 21.6622 493.221 22.1413C492.742 22.6205 492.362 23.1893 492.103 23.8153C491.843 24.4414 491.71 25.1124 491.71 25.79C491.71 26.4676 491.843 27.1386 492.103 27.7646C492.362 28.3907 492.742 28.9595 493.221 29.4387C493.7 29.9178 494.269 30.2979 494.895 30.5572C495.521 30.8165 496.192 30.95 496.87 30.95H556.55C557.918 30.95 559.231 30.4064 560.199 29.4387C561.166 28.471 561.71 27.1585 561.71 25.79C561.71 24.4215 561.166 23.109 560.199 22.1413C559.231 21.1736 557.918 20.63 556.55 20.63H566.87C568.238 20.63 569.551 20.0864 570.519 19.1187C571.486 18.151 572.03 16.8385 572.03 15.47C572.03 14.1015 571.486 12.789 570.519 11.8213C569.551 10.8536 568.238 10.31 566.87 10.31H566.86Z" fill="#FFDD0B" />
              <path opacity="0.1" d="M781.03 89.55H773.66C774.338 89.55 775.009 89.4165 775.635 89.1572C776.261 88.8979 776.83 88.5178 777.309 88.0387C777.788 87.5595 778.168 86.9907 778.427 86.3646C778.687 85.7386 778.82 85.0676 778.82 84.39C778.82 83.7124 778.687 83.0414 778.427 82.4153C778.168 81.7893 777.788 81.2205 777.309 80.7413C776.83 80.2622 776.261 79.8821 775.635 79.6228C775.009 79.3635 774.338 79.23 773.66 79.23H713.98C713.302 79.23 712.632 79.3635 712.005 79.6228C711.379 79.8821 710.811 80.2622 710.331 80.7413C709.852 81.2205 709.472 81.7893 709.213 82.4153C708.954 83.0414 708.82 83.7124 708.82 84.39C708.82 85.0676 708.954 85.7386 709.213 86.3646C709.472 86.9907 709.852 87.5595 710.331 88.0387C710.811 88.5178 711.379 88.8979 712.005 89.1572C712.632 89.4165 713.302 89.55 713.98 89.55H721.31C719.942 89.55 718.629 90.0936 717.661 91.0613C716.694 92.029 716.15 93.3415 716.15 94.71C716.15 96.0785 716.694 97.391 717.661 98.3587C718.629 99.3263 719.942 99.87 721.31 99.87H711.03C709.662 99.87 708.349 100.414 707.381 101.381C706.414 102.349 705.87 103.661 705.87 105.03C705.87 106.399 706.414 107.711 707.381 108.679C708.349 109.646 709.662 110.19 711.03 110.19H770.71C772.079 110.19 773.391 109.646 774.359 108.679C775.326 107.711 775.87 106.399 775.87 105.03C775.87 103.661 775.326 102.349 774.359 101.381C773.391 100.414 772.079 99.87 770.71 99.87H781.03C782.399 99.87 783.711 99.3263 784.679 98.3587C785.646 97.391 786.19 96.0785 786.19 94.71C786.19 93.3415 785.646 92.029 784.679 91.0613C783.711 90.0936 782.399 89.55 781.03 89.55Z" fill="#FFDD0B" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_714_73" x1="484.98" y1="583.35" x2="484.98" y2="309.4" gradientUnits="userSpaceOnUse">
                <stop stopColor="#808080" stopOpacity="0.25" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="paint1_linear_714_73" x1="103519" y1="206338" x2="103519" y2="73149.3" gradientUnits="userSpaceOnUse">
                <stop stopColor="#808080" stopOpacity="0.25" />
                <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
                <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
              </linearGradient>
              <clipPath id="clip0_714_73">
                <rect width="1064.62" height="798.95" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div className="list-products">
        { listproducts.map(({ id, url, title, price, description }) => (
          <div key={ id } className="card">
            <img src={ `http://localhost:3001/${url}` } alt={ title } />
            <span>{ Number(price).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            }) }</span>
            <h3>{ title }</h3>
            <span>{ description }</span>
          </div>
        )) }
      </div>
    </main>
  )
}

export default Home;
