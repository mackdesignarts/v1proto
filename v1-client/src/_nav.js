export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'DiDs',
      url: '/dids',
      icon: 'icon-drop',
      children: [
        {
          name: 'View DiDs',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Buy Local',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Buy TollFree',
          url: '/pages/register',
          icon: 'icon-star'
        },
        {
          name: 'Buy International',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Registration Numbers',
          url: '/pages/register',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Reports',
      url: '/pages',
      icon: 'icon-screen-tablet',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'icon-star'
        }
      ]
    }
  ]
}
