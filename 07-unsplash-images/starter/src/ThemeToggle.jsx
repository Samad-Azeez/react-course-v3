import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useGlobalContext } from './Context';

// Component that renders a button to toggle between light and dark themes
const ThemeToggle = () => {
  // Destructure theme state and toggle function from context
  const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
  return (
    <section className='toggle-container'>
      {/* Button that switches between sun and moon icons based on current theme */}
      <button className='dark-toggle' onClick={toggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
