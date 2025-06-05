import type { FeedGroup } from '~/types/feed'
import { getGhAvatar } from './utils/img'

export default [{
    name: '相谈甚多',
    desc: '',
    entries: [{
            author: '冬烟 の 小窝',
            sitenick: '小窝',
            title: '冬烟 の 小窝',
            desc: '你猜，我猜你肯定猜不到嘿嘿……',
            link: 'https://blog.45m.fun/',
            feed: 'https://blog.45m.fun/',
            icon: 'https://q.qlogo.cn/g?b=qq&nk=3010013479&s=640',
            avatar: 'https://q.qlogo.cn/g?b=qq&nk=3010013479&s=640',
            archs: ['Nuxt', 'Vercel'],
            date: '2020-01-29',
            comment: '技术好友,喜欢各种折腾',
        },
    ],
}] satisfies FeedGroup[]
