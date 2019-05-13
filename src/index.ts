import './style/index.less';
import {App} from './ui/app';

const element = document.createElement('div');
element.id = 'app';

App.init(element);

document.body.appendChild(element);