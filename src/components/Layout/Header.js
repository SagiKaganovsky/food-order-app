import HeaderCartButton from './HeaderCartButton';
import mealsImg from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = () => {
    return <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
           <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt="food table" />
        </div>
    </>
};

export default Header;