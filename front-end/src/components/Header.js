import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header({ stateLogin, execFunction }) {
  const navigate = useNavigate();

  function handleClick(event) {
    event.preventDefault();
    execFunction(false);
    localStorage.removeItem('fishstore');
    navigate('/');
  }

  return (
    <header className="app-header">
      <div className="contheader">
        <div className="logomn">
          <Link to="/">
            <span href="/">
              <svg width="513" height="513" viewBox="0 0 513 513" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M358.935 392.946C358.935 392.946 444.268 338.333 444.268 205.213C444.268 72.0929 358.935 8.94592 358.935 8.94592C358.935 8.94592 273.602 72.0929 273.602 205.213C273.602 338.333 358.935 392.946 358.935 392.946Z" fill="#FFDD09" />
                <path d="M295.788 95.9859C309.441 110.493 332.481 119.879 358.935 119.879C385.389 119.879 408.428 110.492 422.082 95.9859C397.335 37.1059 358.935 8.94592 358.935 8.94592C358.935 8.94592 320.535 37.1059 295.788 95.9859Z" fill="#FCC309" />
                <path d="M85.868 102.812C85.015 102.812 84.161 102.812 82.455 101.959L14.188 76.359C9.92098 74.652 8.21498 70.386 9.92098 65.266C11.628 60.999 16.748 58.439 21.014 60.146L89.281 85.746C93.548 87.453 96.108 92.573 94.401 96.839C92.695 101.106 89.281 102.812 85.868 102.812Z" fill="#FFDD09" />
                <path d="M85.868 145.479C85.015 145.479 84.161 145.479 82.455 144.626L14.188 119.026C9.92101 117.319 7.36101 112.199 9.06801 107.933C10.775 103.667 15.895 101.106 20.161 102.813L88.428 128.413C92.695 130.12 95.255 135.24 93.548 139.506C92.695 143.772 89.281 145.479 85.868 145.479Z" fill="#FFDD09" />
                <path d="M85.868 188.146C85.015 188.146 84.161 188.146 82.455 187.293L14.188 161.693C9.92101 159.986 7.36101 154.866 9.06801 150.6C10.775 146.334 15.895 143.773 20.161 145.48L88.428 171.08C92.695 172.787 95.255 177.907 93.548 182.173C92.695 186.439 89.281 188.146 85.868 188.146Z" fill="#FFDD09" />
                <path d="M51.735 256.412C46.615 256.412 43.202 252.999 43.202 247.879V8.94596C43.202 3.82596 46.615 0.412964 51.735 0.412964C56.855 0.412964 60.268 3.82596 60.268 8.94596V247.879C60.268 252.999 56.855 256.412 51.735 256.412Z" fill="#FFDD09" />
                <path d="M145.601 512.412C89.281 512.412 43.201 466.332 43.201 410.012V341.745C43.201 336.625 46.614 333.212 51.734 333.212C56.854 333.212 60.267 336.625 60.267 341.745V410.012C60.267 456.945 98.667 495.345 145.6 495.345C192.533 495.345 230.933 456.945 230.933 410.012V377.585L185.706 416.838C182.293 420.251 176.319 419.398 173.759 415.985C170.346 412.572 171.199 407.452 174.612 404.038L234.345 352.838C236.905 350.278 240.318 350.278 243.732 351.985C247.145 353.692 248.852 356.252 248.852 359.665V410.865C248.001 466.332 201.921 512.412 145.601 512.412Z" fill="#FFDD09" />
                <path d="M77.335 294.812C77.335 320.412 61.975 341.745 43.202 341.745C24.429 341.745 9.06799 320.412 9.06799 294.812C9.06799 269.212 24.428 247.879 43.201 247.879C61.974 247.879 77.335 269.212 77.335 294.812Z" fill="#FFDD09" />
                <path d="M34.668 294.812C34.668 275.185 43.201 258.119 56.001 251.292C51.734 248.732 47.468 247.879 43.201 247.879C24.428 247.879 9.06799 269.212 9.06799 294.812C9.06799 320.412 24.428 341.745 43.201 341.745C47.468 341.745 51.734 340.892 56.001 338.332C43.201 331.506 34.668 314.439 34.668 294.812Z" fill="white" />
                <path d="M358.935 8.94592C358.935 8.94592 353.815 12.3589 346.135 20.0389C370.028 43.9319 418.668 104.519 418.668 205.212C418.668 305.905 370.028 361.372 346.135 382.705C353.815 389.532 358.935 392.945 358.935 392.945C358.935 392.945 444.268 338.332 444.268 205.212C444.268 72.0919 358.935 8.94592 358.935 8.94592Z" fill="#FD9808" />
                <path d="M273.601 205.212C273.601 202.652 273.601 200.092 273.601 197.532V196.679L213.868 316.146L288.108 294.813C279.575 270.066 273.601 240.199 273.601 205.212Z" fill="#FFDD09" />
                <path d="M444.268 205.212C444.268 202.652 444.268 200.092 444.268 197.532V196.679L504.001 316.146L429.761 294.813C438.295 270.066 444.268 240.199 444.268 205.212Z" fill="#FFDD09" />
                <path d="M451.095 463.772L410.135 341.745H406.722C383.682 376.732 358.935 392.945 358.935 392.945C358.935 392.945 334.188 376.732 311.148 341.745H307.735L266.775 463.772C265.068 468.039 265.068 472.305 265.922 477.425C269.335 492.785 282.989 503.878 299.202 503.878C317.975 503.878 333.335 488.518 333.335 469.745V452.678C333.335 438.171 344.428 427.078 358.935 427.078C373.442 427.078 384.535 438.171 384.535 452.678V469.745C384.535 488.518 399.895 503.878 418.668 503.878C434.881 503.878 448.535 492.785 451.948 477.425C452.801 473.159 452.801 468.892 451.095 463.772Z" fill="#FFDD09" />
                <path d="M451.095 463.772L410.135 341.745H406.722C401.602 349.425 396.482 356.252 392.215 362.225L426.348 464.625C428.055 468.892 428.055 473.158 427.201 478.278C424.641 489.371 416.961 497.905 406.721 502.171C410.988 503.878 415.254 504.731 419.521 504.731C435.734 504.731 449.388 493.638 452.801 478.278C453.655 473.159 452.801 468.892 451.095 463.772Z" fill="#FD9808" />
                <path d="M77.335 102.812C76.482 102.812 75.628 102.812 73.922 101.959L5.65499 76.359C1.38799 74.652 -1.17201 69.532 0.534993 65.266C2.24199 61 7.36199 58.439 11.628 60.146L79.895 85.746C84.162 87.453 86.722 92.573 85.015 96.839C84.161 101.106 80.748 102.812 77.335 102.812Z" fill="black" />
                <path d="M77.335 145.479C76.482 145.479 75.628 145.479 73.922 144.626L5.65499 119.026C1.38799 117.319 -1.17201 112.199 0.534993 107.933C2.24199 103.667 7.36199 101.106 11.628 102.813L79.895 128.413C84.162 130.12 86.722 135.24 85.015 139.506C84.161 143.772 80.748 145.479 77.335 145.479Z" fill="black" />
                <path d="M77.335 188.146C76.482 188.146 75.628 188.146 73.922 187.293L5.65499 161.693C1.38799 159.986 -1.17201 154.866 0.534993 150.6C2.24199 146.334 7.36199 143.773 11.628 145.48L79.895 171.08C84.162 172.787 86.722 177.907 85.015 182.173C84.161 186.439 80.748 188.146 77.335 188.146Z" fill="black" />
                <path d="M43.201 350.279C19.308 350.279 0.533997 325.532 0.533997 294.812C0.533997 264.092 19.307 239.345 43.201 239.345C67.095 239.345 85.868 264.092 85.868 294.812C85.868 325.532 67.095 350.279 43.201 350.279ZM43.201 256.412C29.548 256.412 17.601 274.332 17.601 294.812C17.601 315.292 29.548 333.212 43.201 333.212C56.854 333.212 68.801 315.292 68.801 294.812C68.801 274.332 56.855 256.412 43.201 256.412Z" fill="black" />
                <path d="M43.201 256.412C38.081 256.412 34.668 252.999 34.668 247.879V8.94596C34.668 3.82596 38.081 0.412964 43.201 0.412964C48.321 0.412964 51.734 3.82596 51.734 8.94596V247.879C51.735 252.999 48.321 256.412 43.201 256.412Z" fill="black" />
                <path d="M137.068 512.412C80.748 512.412 34.668 466.332 34.668 410.012V341.745C34.668 336.625 38.081 333.212 43.201 333.212C48.321 333.212 51.734 336.625 51.734 341.745V410.012C51.734 456.945 90.134 495.345 137.067 495.345C184 495.345 222.4 456.945 222.4 410.012V377.585L177.173 416.838C173.76 420.251 167.786 419.398 165.226 415.985C161.813 412.572 162.666 407.452 166.079 404.038L240.319 340.891V410.011C239.468 466.332 193.388 512.412 137.068 512.412Z" fill="black" />
                <path d="M367.468 68.679C367.468 73.799 364.055 77.212 358.935 77.212C353.815 77.212 350.402 73.799 350.402 68.679C350.402 63.559 353.815 60.146 358.935 60.146C364.055 60.146 367.468 63.559 367.468 68.679Z" fill="black" />
                <path d="M358.935 401.479C357.228 401.479 355.522 400.626 354.668 399.772C350.401 398.065 265.068 341.745 265.068 205.212C265.068 69.532 350.401 4.67897 353.815 2.11897C357.228 -0.441025 360.642 -0.441025 364.055 2.11897C367.468 4.67897 452.802 69.532 452.802 205.212C452.802 341.745 367.469 398.065 363.202 399.772C362.348 400.626 360.641 401.479 358.935 401.479ZM358.935 20.039C341.015 36.252 282.135 96.839 282.135 205.212C282.135 314.439 341.868 369.052 358.935 382.705C376.002 369.052 435.735 314.438 435.735 205.212C435.735 96.839 376.855 36.252 358.935 20.039Z" fill="black" />
                <path d="M211.308 325.532C208.748 325.532 206.188 324.679 204.481 322.119C201.921 319.559 201.921 316.146 203.628 312.732L263.361 193.265C265.068 189.852 268.481 188.145 271.894 188.145C275.307 188.145 277.867 190.705 279.574 194.118C279.574 194.971 280.427 196.678 280.427 197.531V199.238C280.427 200.945 280.427 203.505 280.427 205.211C280.427 235.931 285.547 264.944 294.934 291.398C295.787 293.958 295.787 295.665 294.081 298.225C293.228 299.932 291.521 301.638 288.961 302.492L213.868 325.532C213.015 325.532 212.161 325.532 211.308 325.532ZM263.361 231.666L227.521 303.346L274.454 289.693C269.335 270.919 265.068 252.146 263.361 231.666Z" fill="black" />
                <path d="M503.148 325.532C502.295 325.532 501.441 325.532 500.588 325.532L426.348 303.345C423.788 302.492 422.081 300.785 421.228 299.078C420.375 297.371 422.081 294.811 422.081 292.251C431.468 265.798 434.881 236.784 434.881 206.064C434.881 204.357 434.881 201.797 434.881 200.091V198.384C434.881 197.531 434.881 196.677 435.734 194.971C436.587 191.558 440.001 188.998 443.414 188.998C446.827 188.998 450.241 190.705 451.947 193.265L511.68 312.732C513.387 316.145 512.533 319.559 510.827 322.119C508.268 324.679 505.708 325.532 503.148 325.532ZM440.001 288.839L486.934 302.492L451.094 230.812C449.388 252.146 445.121 270.919 440.001 288.839Z" fill="black" />
                <path d="M418.668 512.412C394.775 512.412 376.001 493.639 376.001 469.745V452.678C376.001 443.291 368.321 435.611 358.934 435.611C349.547 435.611 341.867 443.291 341.867 452.678V469.745C341.867 493.638 323.094 512.412 299.2 512.412C279.573 512.412 262.507 498.759 257.387 479.132C255.68 474.012 256.534 468.039 258.24 461.212L299.2 338.332C300.053 334.919 303.467 332.359 306.88 332.359H310.293C312.853 332.359 316.266 334.066 317.12 336.626C332.48 361.373 349.547 375.879 357.227 381.853C364.907 375.88 383.68 363.08 399.04 338.333C400.747 335.773 401.6 332.36 404.16 332.36H410.133C413.546 332.36 416.96 334.92 417.813 338.333L458.773 461.213C460.48 467.186 461.333 473.16 459.626 479.133C455.361 498.759 438.295 512.412 418.668 512.412ZM358.935 418.546C377.708 418.546 393.068 433.906 393.068 452.679V469.746C393.068 484.253 404.161 495.346 418.668 495.346C430.615 495.346 440.855 486.813 443.415 475.719C444.268 473.159 443.415 470.599 442.562 467.186L405.869 357.959C384.536 386.972 364.056 400.626 363.202 400.626C360.642 402.333 357.229 402.333 353.815 400.626C352.962 399.773 332.482 386.973 311.148 357.959L274.455 468.039C273.602 471.452 273.602 474.012 273.602 476.572C277.015 486.812 287.255 495.345 299.202 495.345C313.709 495.345 324.802 484.252 324.802 469.745V452.678C324.801 433.906 340.161 418.546 358.935 418.546Z" fill="black" />
                <path d="M358.935 128.412C331.628 128.412 305.175 118.172 288.962 101.959C286.402 99.399 286.402 95.986 287.255 92.572C312.855 32.839 352.108 3.82497 353.815 2.11897C357.228 -0.441025 360.642 -0.441025 364.055 2.11897C365.762 2.97197 404.162 31.986 430.615 92.572C432.322 95.985 431.468 99.399 428.908 101.959C412.695 118.172 386.241 128.412 358.935 128.412ZM306.028 93.426C318.828 104.519 338.455 111.346 358.935 111.346C379.415 111.346 399.042 104.519 411.842 93.426C393.069 53.319 369.175 29.426 358.935 20.039C348.695 29.426 323.948 53.319 306.028 93.426Z" fill="black" />
                <path d="M333.335 188.146C318.828 188.146 307.735 177.053 307.735 162.546C307.735 157.426 311.148 154.013 316.268 154.013C321.388 154.013 324.801 157.426 324.801 162.546C324.801 167.666 328.214 171.079 333.334 171.079C338.454 171.079 341.867 167.666 341.867 162.546C341.867 157.426 345.28 154.013 350.4 154.013C355.52 154.013 358.933 157.426 358.933 162.546C358.935 177.052 347.841 188.146 333.335 188.146Z" fill="black" />
                <path d="M341.868 307.612C327.361 307.612 316.268 296.519 316.268 282.012C316.268 276.892 319.681 273.479 324.801 273.479C329.921 273.479 333.334 276.892 333.334 282.012C333.334 287.132 336.747 290.545 341.867 290.545C346.987 290.545 350.4 287.132 350.4 282.012C350.4 276.892 353.813 273.479 358.933 273.479C364.053 273.479 367.466 276.892 367.466 282.012C367.468 296.519 356.375 307.612 341.868 307.612Z" fill="black" />
                <path d="M384.535 247.879C370.028 247.879 358.935 236.786 358.935 222.279C358.935 217.159 362.348 213.746 367.468 213.746C372.588 213.746 376.001 217.159 376.001 222.279C376.001 227.399 379.414 230.812 384.534 230.812C389.654 230.812 393.067 227.399 393.067 222.279C393.067 217.159 396.48 213.746 401.6 213.746C406.72 213.746 410.133 217.159 410.133 222.279C410.135 236.786 399.041 247.879 384.535 247.879Z" fill="black" />
              </svg>
              Fish Store
            </span>
          </Link>
        </div>

        <div className="logmn">
          { stateLogin
            ?
            <Link to="/" className="register" onClick={ handleClick }>
              Sair
            </Link>
            :
            <>
              <Link to="/login" className="login">Logar</Link>
              <Link to="/register" className="register">Registrar-se</Link>
            </> }
        </div>
      </div>
    </header>
  )
}

export default Header
