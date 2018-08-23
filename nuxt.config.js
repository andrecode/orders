module.exports = {

    env: {
        dbConnection: {
            login:  '',
            password: '',
            url: '',
            database: ''
        },
    },

  head: {
    title: 'Заказы!',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Заказы' }
    ],
    link: [
        { rel:  'stylesheet prefetch', 
          href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap.min.css' }
      , { rel:  'stylesheet prefetch',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/css/bootstrap-theme.min.css'}
    ]
  },
};
