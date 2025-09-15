function StarIcon({ fillType = 'full', color = 'text-yellow-star', className = '' }) {
  let fillAttribute = 'none';

  if (fillType === 'full') {
    fillAttribute = 'currentColor';
  } else if (fillType === 'half') {
    fillAttribute = 'url(#half-fill)';
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      className={`${color} ${className}`}
    >
      <defs>
        <linearGradient id="half-fill" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M100,20 L124.7,76.5 L187.9,76.5 L137.9,114.6 L157.6,170.8 L100,135.4 L42.4,170.8 L62.1,114.6 L12,76.5 L75.3,76.5 Z"
        stroke="currentColor"
        strokeWidth="10"
        fill={fillAttribute}
      />
    </svg>
  );
}

export default StarIcon;