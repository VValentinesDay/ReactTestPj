import Button from "./Button/Button";

export default function TabSection({active, onChange}){
    return(
        <section>
            {/* При клике на кнопку вызывается onChange со значением 'main' */}
            <Button isActive={active == 'main'} onClick ={() => onChange('main')}>Главная</Button>

            <Button isActive={active == 'feedback'} onClick={() => onChange('feedback')}>Обратная связь</Button>
            
            <Button isActive={active == 'effect'} onClick={() => onChange('effect')}>Effect</Button>
            
        </section>
    )
}