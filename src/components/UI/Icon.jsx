export default function Icon({ icon }) {
  let iconClass = 'fa fa-';
  if (icon) {
    iconClass += icon;
  }
  return (
    <i
      style={{ padding: '0.3rem' }}
      className={iconClass}
      aria-hidden='true'
    ></i>
  );
}
