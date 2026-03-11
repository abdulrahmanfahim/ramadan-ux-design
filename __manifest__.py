{
    'name': 'Ramadan Website UX Design',
    'version': '1.97',
    'summary': 'Add Ramadan effects to your Odoo website: golden stars, crescent, lanterns, and audio.',
    'category': 'Website',
    'author': 'Abdulrahman Fahim',
    'website': 'https://abdulrahmanfahim.github.io',
    'depends': ['website'],
    'data': [
        'views/views.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'static/src/css/ramadan_ux.css',
            'static/src/js/ramadan_ux.js',
        ],
    },
    'images': ['static/description/icon.png'],
    'installable': True,
    'application': False,
    'auto_install': False,
}
