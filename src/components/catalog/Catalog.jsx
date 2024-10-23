import { Card } from '../card/Card';
import s from './Catalog.module.css';
export function Catalog() {
    return (
        <section className={`container ${s.catalog}`}>
            <h2>Каталог</h2>
            <div className={s.cat}>
                <p>Категории:</p>
                <div className={s.btns}>
                    <buttton className='btn'>Все товары</buttton>
                    <buttton className='btn'>Шины/колеса</buttton>
                    <buttton className='btn'>Масла</buttton>
                    <buttton className='btn'>Ароматизаторы</buttton>
                </div>
            </div>
            <div className={s.cards}>
                <Card img='/card1.jpg' name='Первое короче' price='462'/>
                <Card img='/card2.jpg' name='Втрой мем' price='355'/>
                <Card img='/card3.jpg' name='Третье как вам' price='736'/>
                <Card img='/card4.jpg' name='Смешно?' price='321'/>
                <Card img='/card5.jpg' name='Оаоа' price='345'/>
                <Card img='/card6.jpg' name='Шестое короче' price='432'/>
                <Card img='/card7.jpg' name='Еще карточка' price='1753'/>
                <Card img='/card8.jpg' name='реакт это оч тяжело' price='513'/>
                <Card img='/card9.jpg' name='я устала' price='565'/>
            </div>
            <a href="#">Загрузить еще товары</a>
        </section>
    )
}