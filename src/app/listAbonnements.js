const ABONNEMENT = [
    {
        platform: "Netflix",
        icon: '/Images/Netflix.jpg',
        offres: {
            euro: [
                {
                    priceTotal: 5.99,
                    priceMonth: 5.99,
                    type: 'month',
                    duration: 1,
                    description: 'Standard avec pub'
                },
                {
                    priceTotal: 10.99,
                    priceMonth: 10.99,
                    type: 'month',
                    duration: 1,
                    description: 'Essentiel'
                },
                {
                    priceTotal: 13.49,
                    priceMonth: 13.49,
                    type: 'month',
                    duration: 1,
                    description: 'Standard'
                },
                {
                    priceTotal: 19.99,
                    priceMonth: 19.99,
                    type: 'month',
                    duration: 1,
                    description: 'Premium'
                }
            ],
            dollars: [
                {
                    priceTotal: 9.99,
                    type: 'month',
                    duration: 1,
                    description: 'Lorem Input'
                },
                {
                    priceTotal: 14.99,
                    type: 'month',
                    duration: 1,
                    description: 'Lorem Input'
                },
                {
                    priceTotal: 19.99,
                    type: 'month',
                    duration: 1,
                    description: 'Lorem Input'
                }
            ]
        }
    },
    {
        platform: "Twitch",
        icon: '/Images/Twitch.jpg',
        offres: {
            euro: [
                {
                    priceTotal: 0,
                    priceMonth: 0,
                    type: 'month',
                    duration: 1,
                    description: 'Prime'
                },
                {
                    priceTotal: 3.99,
                    priceMonth: 3.99,
                    type: 'month',
                    duration: 1,
                    description: 'Tier 1 - 1 mois'
                },
                {
                    priceTotal: 10.77,
                    priceMonth: 3.59,
                    type: 'month',
                    duration: 3,
                    reduction: '10',
                    description: 'Tier 1 - 3 mois'
                },
                {
                    priceTotal: 20.35,
                    priceMonth: 3.39,
                    type: 'month',
                    duration: 6,
                    reduction: '15',
                    description: 'Tier 1 - 6 mois'
                },
                {
                    priceTotal: 7.99,
                    priceMonth: 7.99,
                    type: 'month',
                    duration: 1,
                    description: 'Tier 2 - 1 mois'
                },
                {
                    priceTotal: 21.57,
                    priceMonth: 7.19,
                    type: 'month',
                    duration: 3,
                    reduction: '10',
                    description: 'Tier 2 - 3 mois'
                },
                {
                    priceTotal: 40.75,
                    priceMonth: 6.79,
                    type: 'month',
                    duration: 6,
                    reduction: '15',
                    description: 'Tier 2 - 6 mois'
                },
                {
                    priceTotal: 19.99,
                    priceMonth: 19.99,
                    type: 'month',
                    duration: 1,
                    description: 'Tier 3 - 1 mois'
                },
                {
                    priceTotal: 53.97,
                    priceMonth: 17.99,
                    type: 'month',
                    duration: 3,
                    reduction: '10',
                    description: 'Tier 3 - 3 mois'
                },
                {
                    priceTotal: 101.95,
                    priceMonth: 16.99,
                    type: 'month',
                    duration: 6,
                    reduction: '15',
                    description: 'Tier 3 - 6 mois'
                },
                
            ],
            dollars: [
                {
                    priceTotal: 9.99,
                    description: 'Lorem Input'
                },
                {
                    priceTotal: 14.99,
                    description: 'Lorem Input'
                },
                {
                    priceTotal: 19.99,
                    description: 'Lorem Input'
                }
            ]
        }
    }
]

export default ABONNEMENT