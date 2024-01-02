import React from 'react'

type Props = {
    width?: number | 'auto'
    height?: number | 'auto'
    color?: string | 'currentColor'
    classes?: string | ''
}

const NewIcon = (props: Props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill={props.color} className={`fill-current ${props.classes}`} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.51159 3.69837C8.9663 4.07389 9.54565 4.25 10 4.25C10.4142 4.25 10.75 4.58579 10.75 5C10.75 5.41421 10.4142 5.75 10 5.75C9.27955 5.75 8.44852 5.50913 7.75 5.0045V11C7.75 11.1595 7.7002 11.3074 7.6153 11.429C7.21563 12.7712 5.97212 13.75 4.5 13.75C2.70507 13.75 1.25 12.2949 1.25 10.5C1.25 8.70507 2.70507 7.25 4.5 7.25C5.14432 7.25 5.74485 7.4375 6.25 7.76091V2H7.75C7.75 2.79785 8.0784 3.34061 8.51159 3.69837ZM6.25 10.5C6.25 9.5335 5.4665 8.75 4.5 8.75C3.5335 8.75 2.75 9.5335 2.75 10.5C2.75 11.4665 3.5335 12.25 4.5 12.25C5.4665 12.25 6.25 11.4665 6.25 10.5ZM19.5727 3.94109C18.901 4.11226 18.0215 4.47821 16.7452 5.01241L14.7452 5.84951C14.135 6.10492 13.7328 6.27436 13.4371 6.43763C13.1575 6.59205 13.0364 6.70818 12.9594 6.82394C12.8823 6.93969 12.822 7.09625 12.7875 7.41379C12.751 7.74954 12.75 8.18597 12.75 8.8475V10.8922L21.2497 7.49235C21.2478 6.38367 21.2348 5.58512 21.1466 4.98852C21.0473 4.31734 20.8772 4.0875 20.6925 3.96459C20.5079 3.84167 20.2302 3.77354 19.5727 3.94109ZM22.75 7.98252V7.94757C22.75 6.64216 22.7501 5.5776 22.6304 4.769C22.5067 3.93292 22.2308 3.18652 21.5236 2.71585C20.8164 2.24517 20.0213 2.27883 19.2023 2.48754C18.4102 2.68938 17.4282 3.10042 16.224 3.60446L14.13 4.48093C13.5655 4.71715 13.0873 4.91728 12.712 5.12457C12.3126 5.34512 11.9686 5.60525 11.7106 5.99288C11.4527 6.38052 11.3455 6.79827 11.2963 7.25181C11.25 7.67809 11.25 8.19649 11.25 8.80836V11.983C11.2497 11.9945 11.2497 12.006 11.25 12.0175V16.7609C10.7449 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.33 12.7369 19.163 12.7118 19H12.75V12.5078L21.25 9.10778V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.3831 22.7438 17.2676 22.7318 17.1538H22.75V8.01702C22.7503 8.00554 22.7503 7.99404 22.75 7.98252ZM19.5 15.75C18.5335 15.75 17.75 16.5335 17.75 17.5C17.75 18.4665 18.5335 19.25 19.5 19.25C20.4665 19.25 21.25 18.4665 21.25 17.5C21.25 16.5335 20.4665 15.75 19.5 15.75ZM9.5 17.75C8.5335 17.75 7.75 18.5335 7.75 19.5C7.75 20.4665 8.5335 21.25 9.5 21.25C10.4665 21.25 11.25 20.4665 11.25 19.5C11.25 18.5335 10.4665 17.75 9.5 17.75Z" fill={props.color} />
        </svg>
    )
}

const HotIcon = (props: Props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill={props.color} className={`fill-current ${props.classes}`} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.25961 3.09856C9.6636 2.08774 10.9948 1.46276 12.0272 2.2492C13.7471 3.55935 15.9044 5.4855 17.6398 7.68865C19.3595 9.87197 20.75 12.4348 20.75 15C20.75 17.2933 20.0398 18.9975 19.0117 20.218C17.9933 21.4269 16.6994 22.1193 15.5816 22.4671C15.0076 22.6457 14.4825 22.3825 14.2275 21.9545C13.9871 21.5512 13.9859 21.0147 14.2863 20.583C15.1436 19.351 16.05 17.5793 16.05 16C16.05 15.2165 15.7123 14.2889 15.1668 13.3372C14.7566 12.6215 14.2539 11.9351 13.7643 11.3465C13.6627 12.7494 13.3578 14.5121 12.412 15.9696C11.9822 16.6319 11.0267 16.706 10.518 16.0627C10.3592 15.8618 10.2023 15.6412 10.0588 15.4393C10.0501 15.4271 10.0415 15.4151 10.033 15.403C9.9545 15.2927 9.87986 15.1882 9.80763 15.09C9.12187 15.773 8.48333 16.5902 8.48333 17.5C8.48333 18.3037 8.88448 19.4025 9.35898 20.3335C9.61561 20.837 9.50832 21.3951 9.1994 21.7606C8.87092 22.1492 8.27312 22.3491 7.70569 22.0206C5.76159 20.8952 3.25 18.4917 3.25 15C3.25 14.0531 3.57109 13.0736 4.0203 12.1168C4.47254 11.1536 5.0858 10.15 5.72984 9.14739C5.95297 8.80004 6.17941 8.45306 6.40546 8.10668C7.51002 6.41411 8.60528 4.73579 9.25961 3.09856ZM10.8983 3.41743C10.7958 3.45292 10.6992 3.53846 10.6525 3.65524C9.93718 5.44504 8.74008 7.27713 7.63532 8.9679C7.41569 9.30403 7.19971 9.63458 6.99189 9.95809C6.35264 10.9532 5.78547 11.8866 5.3781 12.7543C4.96769 13.6284 4.75 14.3737 4.75 15C4.75 17.2945 6.15653 19.0762 7.63307 20.1782C7.27845 19.3371 6.98333 18.367 6.98333 17.5C6.98333 15.7694 8.2827 14.4629 9.00894 13.7752C9.47929 13.3298 10.2914 13.2899 10.7647 13.874C10.9359 14.0853 11.1032 14.3197 11.2553 14.5336L11.2734 14.559C11.3161 14.619 11.3576 14.6774 11.3983 14.7342C12.0671 13.4599 12.2543 11.9056 12.3012 10.6262C12.3204 10.0998 12.6468 9.68344 13.0747 9.50935C13.5118 9.33153 14.0549 9.40987 14.4285 9.82319L13.8721 10.3261L14.4285 9.82319C15.0949 10.5604 15.8626 11.5347 16.4682 12.5913C17.0657 13.6337 17.55 14.8329 17.55 16C17.55 17.6926 16.7822 19.4101 16.0062 20.6885C16.6582 20.3692 17.3159 19.9028 17.8644 19.2516C18.6512 18.3177 19.25 16.9612 19.25 15C19.25 12.9433 18.1125 10.7131 16.4614 8.61679C14.8259 6.54033 12.7696 4.70034 11.1183 3.44243C11.0636 3.40079 10.993 3.38466 10.8983 3.41743Z" fill={props.color} />
        </svg>
    )
}

const TopIcon = (props: Props) => {
    return (
        <svg width={props.width} height={props.height} viewBox="0 0 24 24" fill={props.color} className={`fill-current ${props.classes}`} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 3.03449C11.9419 3.13513 11.8772 3.25103 11.801 3.38769L11.7027 3.56405C11.6958 3.5765 11.6884 3.59009 11.6804 3.60466C11.6019 3.74827 11.4718 3.9861 11.255 4.15071C11.0336 4.31877 10.7673 4.37659 10.6116 4.4104C10.596 4.41379 10.5815 4.41693 10.5683 4.41992L10.3774 4.46312C10.2022 4.50275 10.0595 4.53509 9.9375 4.56575C10.0169 4.66345 10.1199 4.78474 10.254 4.94154L10.3842 5.09372C10.3934 5.10452 10.4035 5.11609 10.4141 5.1284C10.5221 5.25273 10.6963 5.45346 10.7769 5.71261C10.8566 5.96869 10.8291 6.23243 10.8118 6.39882C10.81 6.41542 10.8084 6.43105 10.807 6.4456L10.7873 6.64866C10.7691 6.83692 10.7549 6.98718 10.7455 7.10937C10.8497 7.06347 10.9682 7.00894 11.109 6.9441L11.2878 6.8618C11.3001 6.85613 11.3136 6.84977 11.3281 6.8429C11.4716 6.77522 11.7213 6.65745 12 6.65745C12.2787 6.65745 12.5284 6.77522 12.6719 6.8429C12.6864 6.84977 12.6999 6.85613 12.7122 6.8618L12.891 6.9441C13.0318 7.00894 13.1503 7.06347 13.2546 7.10937C13.2451 6.98718 13.2309 6.83692 13.2127 6.64866L13.193 6.4456C13.1916 6.43105 13.19 6.41542 13.1882 6.39882C13.1709 6.23243 13.1434 5.96869 13.2231 5.71261C13.3037 5.45346 13.4779 5.25273 13.5859 5.1284C13.5966 5.11609 13.6066 5.10452 13.6158 5.09372L13.746 4.94153C13.8801 4.78474 13.9831 4.66345 14.0625 4.56575C13.9405 4.53509 13.7978 4.50275 13.6226 4.46312L13.4317 4.41992C13.4185 4.41693 13.404 4.41379 13.3884 4.4104C13.2327 4.37659 12.9664 4.31877 12.745 4.15071C12.5282 3.9861 12.3981 3.74827 12.3196 3.60466C12.3116 3.59009 12.3042 3.5765 12.2973 3.56405L12.199 3.38769C12.1228 3.25103 12.0581 3.13513 12 3.03449ZM11.0135 1.79963C11.1857 1.57481 11.4983 1.25 12 1.25C12.5017 1.25 12.8143 1.57481 12.9865 1.79963C13.1508 2.01421 13.3163 2.31124 13.486 2.61576C13.4937 2.62961 13.5014 2.64347 13.5091 2.65734L13.6075 2.83369C13.6303 2.87459 13.6482 2.90677 13.6639 2.93429C13.6912 2.94071 13.723 2.94792 13.7627 2.95691L13.9537 3.0001C13.9693 3.00364 13.9849 3.00717 14.0006 3.0107C14.3284 3.08478 14.6542 3.15839 14.9042 3.25695C15.1804 3.36577 15.5547 3.5777 15.6989 4.04161C15.8407 4.49734 15.6618 4.88336 15.5056 5.13146C15.3611 5.36108 15.1414 5.61786 14.9165 5.88075C14.9063 5.89263 14.8962 5.90452 14.886 5.91642L14.7558 6.06861C14.7213 6.10894 14.6954 6.13935 14.6735 6.16566C14.6764 6.202 14.6805 6.24433 14.686 6.30093L14.7057 6.50398C14.7072 6.51947 14.7087 6.53494 14.7102 6.55039C14.7444 6.90232 14.7774 7.24242 14.7653 7.51447C14.7526 7.79972 14.6841 8.23152 14.2969 8.52544C13.8975 8.82864 13.4564 8.76256 13.1767 8.68241C12.919 8.60856 12.6144 8.46823 12.3077 8.3269C12.293 8.32014 12.2783 8.31337 12.2636 8.30661L12.0849 8.22431C12.0514 8.20891 12.024 8.19626 12 8.18542C11.9761 8.19626 11.9486 8.20891 11.9151 8.22431L11.7364 8.30661C11.7217 8.31337 11.707 8.32014 11.6923 8.3269C11.3856 8.46823 11.0811 8.60856 10.8233 8.68241C10.5436 8.76256 10.1025 8.82864 9.70306 8.52544C9.3159 8.23153 9.24744 7.79972 9.23473 7.51447C9.22261 7.24242 9.25564 6.90232 9.28982 6.55039C9.29132 6.53494 9.29282 6.51947 9.29432 6.50398L9.314 6.30093C9.31948 6.24433 9.32356 6.202 9.32655 6.16567C9.30466 6.13935 9.27867 6.10894 9.24418 6.06861L9.11403 5.91642C9.10385 5.90452 9.09368 5.89262 9.08351 5.88074C8.8586 5.61786 8.63891 5.36108 8.49436 5.13146C8.33818 4.88336 8.15934 4.49734 8.30106 4.04161C8.44532 3.5777 8.81962 3.36577 9.09577 3.25695C9.34585 3.1584 9.67164 3.08478 9.99945 3.0107C10.0151 3.00717 10.0307 3.00364 10.0464 3.0001L10.2373 2.95691C10.277 2.94792 10.3088 2.94071 10.3361 2.9343C10.3518 2.90677 10.3698 2.87459 10.3926 2.83369L10.4909 2.65734C10.4986 2.64347 10.5063 2.62961 10.514 2.61576C10.6837 2.31124 10.8492 2.01421 11.0135 1.79963ZM10.9506 9.25H13.0494C13.7142 9.24996 14.2871 9.24993 14.7458 9.31161C15.2375 9.3777 15.7087 9.52676 16.091 9.90901C16.4732 10.2913 16.6223 10.7625 16.6884 11.2542C16.7501 11.7129 16.75 12.2858 16.75 12.9506L16.75 15.4174C16.9136 15.3678 17.0827 15.3347 17.2542 15.3116C17.7129 15.2499 18.2858 15.25 18.9506 15.25H19.0494C19.7142 15.25 20.2871 15.2499 20.7458 15.3116C21.2375 15.3777 21.7087 15.5268 22.091 15.909C22.4732 16.2913 22.6223 16.7625 22.6884 17.2542C22.7501 17.7129 22.75 18.2858 22.75 18.9506V22C22.75 22.4142 22.4142 22.75 22 22.75C21.5858 22.75 21.25 22.4142 21.25 22V19C21.25 18.2717 21.2484 17.8009 21.2018 17.454C21.158 17.1287 21.0874 17.0268 21.0303 16.9697C20.9732 16.9126 20.8713 16.842 20.546 16.7982C20.1991 16.7516 19.7283 16.75 19 16.75C18.2717 16.75 17.8009 16.7516 17.454 16.7982C17.1287 16.842 17.0268 16.9126 16.9697 16.9697C16.9126 17.0268 16.842 17.1287 16.7982 17.454C16.7516 17.8009 16.75 18.2717 16.75 19V22C16.75 22.4142 16.4142 22.75 16 22.75C15.5858 22.75 15.25 22.4142 15.25 22L15.25 18.9506C15.25 18.9179 15.25 18.8854 15.25 18.8531V13C15.25 12.2717 15.2484 11.8009 15.2018 11.454C15.158 11.1287 15.0874 11.0268 15.0303 10.9697C14.9732 10.9126 14.8713 10.842 14.546 10.7982C14.1991 10.7516 13.7283 10.75 13 10.75H11C10.2717 10.75 9.80091 10.7516 9.45403 10.7982C9.12873 10.842 9.02677 10.9126 8.96967 10.9697C8.91258 11.0268 8.84197 11.1287 8.79823 11.454C8.7516 11.8009 8.75 12.2717 8.75 13V21.8531C8.75001 21.8854 8.75001 21.9179 8.75001 21.9506L8.75 22C8.75 22.4142 8.41422 22.75 8 22.75C7.58579 22.75 7.25 22.4142 7.25 22C7.25 21.2717 7.24841 20.8009 7.20177 20.454C7.15804 20.1287 7.08743 20.0268 7.03033 19.9697C6.97324 19.9126 6.87128 19.842 6.54598 19.7982C6.1991 19.7516 5.72831 19.75 5 19.75C4.27169 19.75 3.80091 19.7516 3.45403 19.7982C3.12873 19.842 3.02677 19.9126 2.96967 19.9697C2.91258 20.0268 2.84197 20.1287 2.79823 20.454C2.7516 20.8009 2.75 21.2717 2.75 22C2.75 22.4142 2.41422 22.75 2 22.75C1.58579 22.75 1.25 22.4142 1.25 22L1.25 21.9506C1.24996 21.2858 1.24993 20.7129 1.31161 20.2542C1.37771 19.7625 1.52677 19.2913 1.90901 18.909C2.29126 18.5268 2.76252 18.3777 3.25416 18.3116C3.71291 18.2499 4.28577 18.25 4.95064 18.25H5.04937C5.71424 18.25 6.2871 18.2499 6.74585 18.3116C6.91735 18.3347 7.08637 18.3678 7.25 18.4174L7.25 12.9506C7.24996 12.2858 7.24993 11.7129 7.31161 11.2542C7.37771 10.7625 7.52677 10.2913 7.90901 9.90901C8.29126 9.52676 8.76252 9.3777 9.25416 9.31161C9.71291 9.24993 10.2858 9.24996 10.9506 9.25Z" fill={props.color} />
        </svg>
    )
}

export {
    NewIcon,
    HotIcon,
    TopIcon
}