import classNames from "classnames"
//todo єто типа универсальная кнопка
export const ButtonUnivers = (props) => {

  return (
    <button className={classNames('button', props.className,
	//мог би просто передать ей класс и не вийобуватися
		{'button--outline ': props.outline}
		)} onClick={props.onClick}>
			{props.children}
    </button>
  );
};
