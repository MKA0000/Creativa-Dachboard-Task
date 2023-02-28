import './trainers.style.css';

const Trainers = () => {

    const Data = [
        {
            name: 'محمد خالد',
            specialization: 'تطوير واجهات مستخدم',
            rate: '10'
        }, {
            name: 'محمد علي',
            specialization: 'ادارة اعمال',
            rate: '10'
        },{
            name: 'خالد حسن',
            specialization: 'هندسة شبكات',
            rate: '7'
        },{
            name: 'مازن ادريس',
            specialization: 'ارشاد اكاديمي',
            rate: '9.4'
        },{
            name: 'محمود الخياط',
            specialization: 'كمال اجسام',
            rate: '7'
        },{
            name: 'محمد عبدالباسط',
            specialization: 'تقويم سلوك',
            rate: '8.7'
        },{
            name: 'جمال قنديل',
            specialization: 'ادارة نظم موزعة',
            rate: '8'
        },{
            name: 'أحمد جبريل',
            specialization: 'هندسة الطاقة',
            rate: '9.5'
        },         {
            name: 'محمد خالد',
            specialization: 'تطوير واجهات مستخدم',
            rate: '10'
        }, {
            name: 'محمد علي',
            specialization: 'ادارة اعمال',
            rate: '10'
        },{
            name: 'خالد حسن',
            specialization: 'هندسة شبكات',
            rate: '7'
        },{
            name: 'مازن ادريس',
            specialization: 'ارشاد اكاديمي',
            rate: '9.4'
        },{
            name: 'محمود الخياط',
            specialization: 'كمال اجسام',
            rate: '7'
        },{
            name: 'محمد عبدالباسط',
            specialization: 'تقويم سلوك',
            rate: '8.7'
        },{
            name: 'جمال قنديل',
            specialization: 'ادارة نظم موزعة',
            rate: '8'
        },{
            name: 'أحمد جبريل',
            specialization: 'هندسة الطاقة',
            rate: '9.5'
        }, {
            name: 'محمد علي',
            specialization: 'ادارة اعمال',
            rate: '10'
        },{
            name: 'خالد حسن',
            specialization: 'هندسة شبكات',
            rate: '7'
        },{
            name: 'مازن ادريس',
            specialization: 'ارشاد اكاديمي',
            rate: '9.4'
        },{
            name: 'محمود الخياط',
            specialization: 'كمال اجسام',
            rate: '7'
        },{
            name: 'محمد عبدالباسط',
            specialization: 'تقويم سلوك',
            rate: '8.7'
        },{
            name: 'جمال قنديل',
            specialization: 'ادارة نظم موزعة',
            rate: '8'
        },{
            name: 'أحمد جبريل',
            specialization: 'هندسة الطاقة',
            rate: '9.5'
        },         {
            name: 'محمد خالد',
            specialization: 'تطوير واجهات مستخدم',
            rate: '10'
        }, {
            name: 'محمد علي',
            specialization: 'ادارة اعمال',
            rate: '10'
        },{
            name: 'خالد حسن',
            specialization: 'هندسة شبكات',
            rate: '7'
        },{
            name: 'مازن ادريس',
            specialization: 'ارشاد اكاديمي',
            rate: '9.4'
        },{
            name: 'محمود الخياط',
            specialization: 'كمال اجسام',
            rate: '7'
        },{
            name: 'محمد عبدالباسط',
            specialization: 'تقويم سلوك',
            rate: '8.7'
        }
    ]

    return(
        <div className='trainers-table'>
            <ul className='trainers-header'>
                <li>الأسم</li>
                <li>التخصص</li>
                <li>التقييم</li>
            </ul>
            <ul className='trainer-items'>
                {
                    Data.map(trainer => (
                        <li>
                            <span className='name'>{trainer.name}</span>
                            <span className='specialization'>{trainer.specialization}</span>
                            <span className='rate'>{trainer.rate}</span>
                        </li>
                    ))
                }
            </ul>
 
        </div>
    )
}

export default Trainers;