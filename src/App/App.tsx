import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import './index.module.scss';

type Props = {
    localTitle: string;
    globalTitle: string;
}


const App: React.FC<Props> = ({ globalTitle, localTitle }: Props) => {
    return <>
        <div styleName="title">{localTitle}</div>
        <div className="title">{globalTitle}</div>
    </>
}

export default hot(App);