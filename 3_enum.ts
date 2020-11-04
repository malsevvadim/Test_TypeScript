 //enum - вспомогательная сущность, которая помогает лучше структурировать ваш код
 enum Membership {
     Simple
     ,Stadnard
     ,Premium
 }

 const membership = Membership.Stadnard
 const membershipReverse = Membership[2]
 console.log(membership)
 console.log(membershipReverse)

 //можно задавать более понятные значения enum
 enum SocialMedia{
     VK = 'VK',
     FACEBOOK = 'FACEBOOK',
     INSTAGRAM = 'INTAGRAM'
 }

 const social = SocialMedia.INSTAGRAM
 console.log(social)
 