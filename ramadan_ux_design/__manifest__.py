{
    'name': 'Ramadan Website UX Design',
    'version': '1.0',
    'summary': 'Add Ramadan effects to your Odoo website: golden stars, crescent, lanterns, and audio.',
    'category': 'Website',
    'author': 'Your Name',
    'website': 'https://yourwebsite.com',
    'depends': ['website'],
    'data': [
        'views/views.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            # CSS and JS are now embedded directly in views.xml
        ],
    },
    'images': ['static/description/icon.png'],
    'installable': True,
    'application': False,
    'auto_install': False,
}
