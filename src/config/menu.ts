


interface Props {
    id: number,
    title: string,
    link: string,
    icon: string;
}

export const menu: Props[] = [
    {
        id: 1,
        title: 'Dashboard',
        link: '/dash',
        icon: 'Mail'
    },
    {
        id: 2,
        title: 'Usuarios',
        link: '/',
        icon: 'MailOutline'
    },
    {
        id: 3,
        title: 'Planes',
        link: '/plans',
        icon: 'InboxOutlined'
    },
    {
        id: 4,
        title: 'Pagos',
        link: '/payments',
        icon: 'CreditCard'
    },
    {
        id: 5,
        title: 'Transacciones',
        link: '/transactions',
        icon: 'Payment'
    },
]