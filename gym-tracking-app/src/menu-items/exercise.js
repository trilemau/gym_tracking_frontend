// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| MENU ITEMS ||============================== //

const exercise = {
  id: 'exercise',
  title: 'Exercise',
  type: 'group',
  children: [
    {
      id: 'exercise-get-all',
      title: 'Get all exercises',
      type: 'item',
      url: '/exercise/get-all',
      icon: icons.IconDashboard,
      breadcrumbs: false
    }
  ]
};

export default exercise;
