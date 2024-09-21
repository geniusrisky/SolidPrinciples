// Practice Exercise: Many-to-Many Relationship Example

// Scenario: You are designing a Club Membership Management System. In this system:

//     A Member can join multiple Clubs.
//     A Club can have multiple Members.

// You need to implement:

//     A Member class that can join multiple clubs and list the clubs they are part of.
//     A Club class that can add multiple members and list the members in that club.

// Requirements:

//     Member class should:
//         Have a method to join a club.
//         Have a method to list all clubs the member has joined.
//     Club class should:
//         Have a method to add a member.
//         Have a method to list all members in the club.\




// class Club{
//     constructor(name){
//         this.name = name;
//         this.members = new Set();
//     }

//     // add a member
//     addMember(member){
//         if(!this.members.has(member)){
//             this.members,push(member);
//         }
//         console.log(`this club has folowing members: ${member}`)
//     }

//     //list all member

   
// }


// class Member{
//     constructor(name){
//         this.name = name;
//         this.clubs = [];
//     }
//     //join club

//     joinClub(club){
//         if(!this.clubs.has(club))
//     }
// }