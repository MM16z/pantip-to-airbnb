import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Image from 'next/image';

import NoImagePng from '@/assets/images/no-image.png';

type pagePropType = {
  contentImageUrl: string;
  contentTitle: string;
  author: string;
};

export default function CardComponent({ contentImageUrl, contentTitle, author }: pagePropType) {
  // function parseStringToReact(input: any) {
  //   const parts = input?.split(/(\{\{em\}\}|\{\{eem\}\})/);
  //   let isEmphasized = false;

  //   return parts?.map((part: any, index: any) => {
  //     if (part === '{{em}}') {
  //       isEmphasized = true;
  //       return null; // We handle opening tag implicitly
  //     } else if (part === '{{eem}}') {
  //       isEmphasized = false;
  //       return null; // We handle closing tag implicitly
  //     } else if (isEmphasized) {
  //       // eslint-disable-next-line react/no-array-index-key
  //       return <em key={index}>{part}</em>;
  //     } else {
  //       // eslint-disable-next-line react/no-array-index-key
  //       return <span key={index}>{part}</span>; // Wrap non-emphasized parts in span to ensure they are React elements
  //     }
  //   });
  // }
  return (
    <Card sx={{ maxWidth: 345, border: 'inherit', boxShadow: 'inherit', alignSelf: 'flex-start' }}>
      <CardActionArea className="flex flex-col items-center">
        <Image
          height={250}
          style={{ objectFit: 'cover', maxHeight: '250px', minHeight: '250px', borderRadius: '12px' }}
          alt="green iguana"
          src={!contentImageUrl ? NoImagePng : contentImageUrl}
          width={263}

        />
        <CardContent className="p-3 sm:p-3">
          <Typography gutterBottom component="div" className="mb-2 text-sm font-bold">
            {/* {parseStringToReact(contentTitle)} */}
            {contentTitle}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
