"use client";

import { motion, Variants } from "framer-motion";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import Image from "next/image";

const tableVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.25 },
  },
};

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const products = [
  {
    name: 'Apple MacBook Pro 17"',
    color: "Silver",
    category: "Laptop",
    badgeColor: "bg-primary/10 text-primary",
    price: "$2999",
    user: {
      name: "John Doe",
      email: "john@example.com",
      image:
        "data:image/jpeg;base64,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",
    },
  },
  {
    name: "Microsoft Surface Pro",
    color: "White",
    category: "Laptop PC",
    badgeColor: "bg-secondary/10 text-secondary",
    price: "$1999",
    user: {
      name: "Jane Smith",
      email: "jane@example.com",
      image:
        "data:image/jpeg;base64,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",
    },
  },
  {
    name: "Magic Mouse 2",
    color: "Black",
    category: "Accessories",
    badgeColor: "bg-success/10 text-success",
    price: "$99",
    user: {
      name: "Alice Johnson",
      email: "alice@example.com",
      image:
        "data:image/jpeg;base64,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",
    },
  },
  {
    name: "iPad Pro 12.9",
    color: "Space Gray",
    category: "Tablet",
    badgeColor: "bg-warning/10 text-warning",
    price: "$1099",
    user: {
      name: "Michael Brown",
      email: "michael@example.com",
      image:
        "data:image/jpeg;base64,/9j/2wBDAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNH/2wBDAQgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNH/wgARCABgAGADASIAAhEBAxEB/8QAHAABAAIDAQEBAAAAAAAAAAAAAAUGAwQHAggB/8QAGgEAAgMBAQAAAAAAAAAAAAAAAAECBAUDBv/aAAwDAQACEAMQAAAA7MPN6Q1mbMPz/nNnt9J7fzzNM7YhZqtyCKAHO+iUXvKi36p5tCc9RZvacZy7025ZqDjEAco6vq2Hz6GscBfnglY3eUvfU8GfP5BxQAAQlC6nyq9PW6LTenxX6KcQAAQMtULZL0696GQ4i0am52jk36ja9E9iowDTr9s8hX/M6zSBTwKTdsnvTYJf/8QAMRAAAgIBAgMGBQMFAQAAAAAAAQIDBBEABRIxUQYTICEiQRQwMlNxQoGhBxZSYZKx/9oACAEBAAE/APDNv+0wuUa2pYHB4QW1TvVrqF68nGAcH2I+Tbt16Vd57EgSNeZ12g7aieFoKuYoz9Zz62GjuSMx4AT+MnW3b1P5xxOVPTJU6h3ueKYBpJEbqGI1se4vequZCDJG/CT19wfH/UCVxWrJn04dtbH2fqvFHbvx96zjiSNvpUexI9zqCWCFQkUKIo9lUDW4bdQ3SIrJGqy/omUYdTrtJ2amoQRbpFaaUqEWyvt0DprsMM0LT9Zh/A8fbCoL09CrxYDLIX6hBjW837NJXMcaxwRAZlfl+wGtvttNWjlMyycQzxKMDW67lPSrLNHZhiAYAmXkc8hqnes7pUs0r9UqskJHeIcowPQ67FwPVo260jAvFZKkj3HCCD46sN9d93JrYbiAPmehbyxrdKUN2tJBMCUcYODg6SCOhWjgrR4RBhV56vbfBulYQ2VYITnAOCNU44aleGvCvDHGgVR0A1tybh/dcbQhu7IQv04CuDnx3YO/ruo548tTNw5VhgjVuKSQjgnkjx/hjz/6B1DxxLhpXc9Xxn+ANVuKaVY0GSTqtCIYI4/cKAfkbntYsAyRDD9OurL90zI3MHB1CDamWKPzdjgAa2fZkooHkwZT/HyZpkhjLvyGt6nit2ppIh9THXZiuK11bLn2K4/OgcjPyLm8BGZIRy/VqEyywB5Tkv5/tq5QFa3ImPQ3rT8HWzw8VgH9KDJ/Ptqd5EVXQ8jg6guhyEkGCeR8VuTu68re4XSQd7NGnU+f4GiRq7UjtIoLcLKfS2qUEVVFQefnlj10GBQKzcR4cMcBc/7wNSzlWK8mRv8AzUb8caP1UHw34nlqyKgy3kQOuNUg2ZXZCpHpAIwdGQ670670678jV8yvbj7mJ3Mi8lGfMaqxtFXhR/qVAD4mRH+pQdfDQfaXXwtf7S6+Fr/aXXwtf7K6SNIxhEC/geD/xAApEQACAQMCBAUFAAAAAAAAAAABAgMABBEhQRAUMVISICIzUTJxgZGx/9oACAECAQE/AKAJOBUdvkZf9Cja6nDUylWKnqONt7o+xrUUNRU/ut+P5xtnCvju0pqGelTuHc46DTyQyNICGOq4qaR0AUH6h5LcIqPKwHp+dsVDfEXjyyHR+tc2DccyJBhWChNyu5q5VfS6gYPxxkZ2t3iU48W9ck/ctck/ctKziGONjnw78P/EACIRAAICAAUFAQAAAAAAAAAAAAERAAIDECAhMhIxQVFhUv/aAAgBAwEBPwDKuF+iocL0YQjnTkIVY7neM1IAt9UtyOYsgZRAtQgclDbqW3jRh914lzutCB7yluk/JcswBanl/9k=",
    },
  },
  {
    name: "AirPods Pro",
    color: "White",
    category: "Accessories",
    badgeColor: "bg-success/10 text-success",
    price: "$249",
    user: {
      name: "Emma Wilson",
      email: "emma@example.com",
      image:
        "data:image/jpeg;base64,/9j/2wBDAAgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNH/2wBDAQgICAgJCAkKCgkNDgwODRMREBARExwUFhQWFBwrGx8bGx8bKyYuJSMlLiZENS8vNUROQj5CTl9VVV93cXecnNH/wgARCABgAGADASIAAhEBAxEB/8QAGwABAAIDAQEAAAAAAAAAAAAAAAMGBAUHAgH/xAAaAQACAwEBAAAAAAAAAAAAAAAAAgEEBQMG/9oADAMBAAIQAxAAAADq468gAqdPVuuKlvJjYiYAABSLvxVWpuZWLTVvYW6u+g5vb71wzud3PB0AHBu88oq3+d2e0M/Ry1jmnjQen63a2q0gv5wAAUDWXjnWL6DcWim3VDcSG5gBMAAhRZabu8un2q9/0uWvSfzPDerfA8iBY+QYPnLqZ7A9Kuym1cjNuJ9PmdHk8zQ37H//xAAwEAACAQQAAwcCBgMBAAAAAAABAgMABAURBhIxEyEiMkFRYSBxBxAUMIGxIzNAQv/aAAgBAQABPwD/AIMvxdjsczxJqaVfNo6RT8mm/EmQSeSALWG4wxuS0jukT69W8Jq3y2MuZOzhvYXf0UN3n9jjnOvisYscLFZbgldjqFpIEcJJePsnyxDoKE2NiXQji+wXdSGyP+S31HID3gd26t5LuaMmNYzrv/2+L+K4Q4jlyHPY3ZPbxDaMerL7H6/xHuSucsww2kFmZFHoWckUjz3D9Sd9TWNwZnK81WHCWHMWri2EpI9azXBMtqGuMVJJod5iJrhK67bMY06InWYo/uVIO9/XxxkWyknN+nVRASqv68hNW+EkmigHaMnOgdgOvi6Vw1Yw2s8sltdmYeVlJ7gazUE0lgoe5NvGGVmcHX8GsHiruGeCeHLSSQE+NHAZWFWthLjeLsteW8CvGrdy+zSqGq2nFxBHKFK8w6H0+riXAlJpwQexl3ysB7+lHHRpfshGkMagD41qrDAY3Ddo8Mkh7UgeNgQo30FZLF2eUx5tZmYIeUhkOiCp2CKxeOtsdaRW0LOypvxOdsSTsk1JBCbibkCiSQqW11JA1s1FGI41Qeg+vNObe/BI+KvrmGRYkkk1znw/JHtVjewWpSFpmDv5VbYJ+26t7r13UYIQb6nr+xmcSuRg8JAlXyn3+DUsKITa31okqq2ykg6H3FWVri0fntcdDFJrXOASw/k1jbFgqySdOoHv+yyyEaQgH5G6znDc07y3zXChgB4VBFYLExfqezaQ9oq8/i2aS00oHP0HtToyMQR9ch2pXZGx1Hca/T3C+TI3S/cq39iozJ2TRzTPLv1YAf1QtE7TtUleOTu0y67qSO5/9X85+wRf6FCPagGR2I9XOzRUqdEfS86juFGUVzig4pXFLIKSQVtXGjTKVOvzuJRGnyaLg1ut0GoGg1I1RvT6ZN+o/L//xAAjEQACAgEEAgIDAAAAAAAAAAABAgADEQQQMUESIBMiIVFh/9oACAECAQE/ANiwEBB79GOBHtVOYupQ8giIcjfUs6/Gwz4g/aPaSLAWI/Qi5VMBzzxNKbTY35+gGPTU0mu0k58SeZUjPYFrzjsmKAoAHQ3exUGTLbEtUg5/k05Spe/LuI4YbOwVSx6jOzEkzMBiuQYjeSgz/8QAJREAAgEDAwQCAwAAAAAAAAAAAQIDABEhBBAxEiAiQRNRIzJh/9oACAEDAQE/ANgjGipHrsQXaooXl/UY+6bTOOGBqQWbfQpFJ8yNbrK+F6SJFMRVAcZNzTkM1yg4591qxEIk8fyE3J/nZpJxJEALdajIqd1RC0nNMSxJPs7swUZrT61YXBGPvF8Vqtakz8kr6xQIOxNgTRJJud1Y0DcV/9k=",
    },
  },
];

export default function AnimateTableMotion({ replayAnimation = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="rounded-md overflow-hidden shadow"
      key={replayAnimation}
    >
      <Table className="overflow-hidden">
        <TableHeader className="bg-primary/10">
          <TableRow>
            <TableHead>User Info</TableHead>
            <TableHead>Product name</TableHead>
            <TableHead> Color</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>
              <span className="sr-only">Edit</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <motion.tbody variants={tableVariants} initial="hidden" animate="show">
          {products.map((product, idx) => (
            <motion.tr
              key={idx}
              variants={rowVariants}
              className="bg-white dark:bg-gray-800"
            >
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src={product.user.image}
                    width={36}
                    height={36}
                    className="rounded-full"
                    alt="user"
                  />
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {product.user.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {product.user.email}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-medium text-gray-900 dark:text-white">
                {product.name}
              </TableCell>
              <TableCell>{product.color}</TableCell>
              <TableCell>
                <span
                  className={`py-1 text-xs px-3 rounded-full ${product.badgeColor}`}
                >
                  {product.category}
                </span>
              </TableCell>
              <TableCell>{product.price}</TableCell>

              <TableCell>
                <a
                  href="#"
                  className="font-medium text-primary hover:underline dark:text-primary"
                >
                  Edit
                </a>
              </TableCell>
            </motion.tr>
          ))}
        </motion.tbody>
      </Table>
    </motion.div>
  );
}
