
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const data = [
      {
        id: '1',
        name: 'Alice',
        avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
        stories: [
          { id: '1', imageUrl: 'https://images.pexels.com/photos/18911192/pexels-photo-18911192/free-photo-of-the-bridge-is-over-water-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '2', imageUrl: 'https://images.pexels.com/photos/16035630/pexels-photo-16035630/free-photo-of-photo-de-stetindem-avec-la-route-face-a-cette-montagne.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', seen: false },
          { id: '3', imageUrl: 'https://images.pexels.com/photos/25244852/pexels-photo-25244852/free-photo-of-kusadasi-from-a-drone-2.png?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '2',
        name: 'Bob',
        avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        stories: [
          { id: '4', imageUrl: 'https://images.pexels.com/photos/16110137/pexels-photo-16110137/free-photo-of-i-need-you-like-a-heart-needs-a-beat.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '5', imageUrl: 'https://images.pexels.com/photos/14883915/pexels-photo-14883915.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '6', imageUrl: 'https://images.pexels.com/photos/26936244/pexels-photo-26936244/free-photo-of-bikers.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      {
        id: '3',
        name: 'Charlie',
        avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
        stories: [
          { id: '7', imageUrl: 'https://images.pexels.com/photos/18625307/pexels-photo-18625307/free-photo-of-kerala.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '8', imageUrl: 'https://images.pexels.com/photos/24710620/pexels-photo-24710620/free-photo-of-eagle.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
          { id: '9', imageUrl: 'https://images.pexels.com/photos/16035312/pexels-photo-16035312/free-photo-of-italy.jpeg?auto=compress&cs=tinysrgb&w=800', seen: false },
        ],
        seen:false
      },
      // {
      //   id: '4',
      //   name: 'Diana',
      //   avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      //   stories: [
      //     { id: '10', imageUrl: 'https://images.unsplash.com/photo-1555685812-0654f2f5f20a', seen: false },
      //     { id: '11', imageUrl: 'https://images.unsplash.com/photo-1565089745-2e7479c835c7', seen: true },
      //     { id: '12', imageUrl: 'https://images.unsplash.com/photo-1565275326-c14254e00e7b', seen: false },
      //   ],
      // },
      // {
      //   id: '5',
      //   name: 'Ella',
      //   avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
      //   stories: [
      //     { id: '13', imageUrl: 'https://images.unsplash.com/photo-1534336157592-3ddfc6ef4d04', seen: false },
      //     { id: '14', imageUrl: 'https://images.unsplash.com/photo-1528827176988-16b44d6f7766', seen: false },
      //     { id: '15', imageUrl: 'https://images.unsplash.com/photo-1506748686214-df9a64748b8a', seen: true },
      //   ],
      // },

      // {
      //   id: '6',
      //   name: 'Alice in Wonderland',
      //   avatarUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
      //   stories: [
      //     { id: '1', imageUrl: 'https://images.unsplash.com/photo-1547721064-e9b86b8d7a2a', seen: false },
      //     { id: '2', imageUrl: 'https://images.unsplash.com/photo-1566902255-3a817b0945e4', seen: true },
      //     { id: '3', imageUrl: 'https://images.unsplash.com/photo-1506748686214e9df14f2e7d8', seen: false },
      //   ],
      // },
      // {
      //   id: '7',
      //   name: 'Bob Robin',
      //   avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      //   stories: [
      //     { id: '4', imageUrl: 'https://images.unsplash.com/photo-1600958833722-800bf8c4b2a4', seen: false },
      //     { id: '5', imageUrl: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6', seen: true },
      //     { id: '6', imageUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14f2e7d8', seen: false },
      //   ],
      // },
      // {
      //   id: '8',
      //   name: 'Charlie Puth',
      //   avatarUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
      //   stories: [
      //     { id: '7', imageUrl: 'https://images.unsplash.com/photo-1528812687034-5f3dd12a5152', seen: true },
      //     { id: '8', imageUrl: 'https://images.unsplash.com/photo-1534732200027-0cf9d88b6b42', seen: false },
      //     { id: '9', imageUrl: 'https://images.unsplash.com/photo-1528199772-49a3d58e6b2a', seen: false },
      //   ],
      // },
      // {
      //   id: '9',
      //   name: 'Diana Prince',
      //   avatarUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      //   stories: [
      //     { id: '10', imageUrl: 'https://images.unsplash.com/photo-1555685812-0654f2f5f20a', seen: false },
      //     { id: '11', imageUrl: 'https://images.unsplash.com/photo-1565089745-2e7479c835c7', seen: true },
      //     { id: '12', imageUrl: 'https://images.unsplash.com/photo-1565275326-c14254e00e7b', seen: false },
      //   ],
      // },
      // {
      //   id: '10',
      //   name: 'Ella estela',
      //   avatarUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
      //   stories: [
      //     { id: '13', imageUrl: 'https://images.unsplash.com/photo-1534336157592-3ddfc6ef4d04', seen: false },
      //     { id: '14', imageUrl: 'https://images.unsplash.com/photo-1528827176988-16b44d6f7766', seen: false },
      //     { id: '15', imageUrl: 'https://images.unsplash.com/photo-1506748686214-df9a64748b8a', seen: true },
      //   ],
      // },
    ];

    return NextResponse.json(data);
  } catch (error) {
    console.error('Failed to fetch stories:', error);
    return NextResponse.json({ error: 'Failed to fetch stories' }, { status: 500 });
  }
}
