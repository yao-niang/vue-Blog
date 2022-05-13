import Mock from "mockjs";
Mock.mock('/api/banner','get',{
    code: 0,
    msg: '',
    data: [
         {
            id: "1",
            midImg:
                "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100",
            bigImg:
                "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=1920&h=1080",
            title: "凛冬将至",
            description: "想养一只西伯利亚大腮帮子仓鼠",
        },
        {
            id: "2",
            midImg: "http://mdrs.yuanjin.tech/img/20201031205550.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031205551.jpg",
            title: "血火同源",
            description: "想养一只西伯利亚大腮帮子仓鼠",
        },
       
        {
            id: "3",
            midImg: "http://mdrs.yuanjin.tech/img/20201031204401.jpg",
            bigImg: "http://mdrs.yuanjin.tech/img/20201031204403.jpg",
            title: "听我怒吼",
            description: "想养一只西伯利亚大腮帮子仓鼠",
        },

    ]
})


