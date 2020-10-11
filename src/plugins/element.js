import vue from "vue";
import 'element-ui/lib/theme-chalk/index.css';
import { 
  Tooltip,
} from 'element-ui';

const elementUI = [
  Tooltip
];

elementUI.forEach((item) => {
  vue.use(item);
});
