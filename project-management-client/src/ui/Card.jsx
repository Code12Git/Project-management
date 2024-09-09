import React from 'react';
import { motion } from 'framer-motion';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import action from '../data/action';

export default function RecipeReviewCard() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {action.map((item, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full"
                >
                    <Card
                        sx={{
                            width: '100%',  // Full width in grid
                            height: '400px',  // Set a fixed height for uniformity
                            boxShadow: 3,
                            borderRadius: 2,
                            transition: 'transform 0.3s ease',
                            display: 'flex',
                            flexDirection: 'column', // Ensure proper layout for media and content
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="200"  // Set a fixed height for the image
                            image={item.img}
                            alt={item.title}
                            sx={{
                                objectFit: 'cover',
                                borderRadius: '16px 16px 0 0',
                            }}
                        />
                        <CardContent
                            sx={{
                                flexGrow: 1,  // Take remaining space after the image
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between', // Spread content evenly
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 1,
                                    textAlign: 'left',
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: 'text.secondary',
                                    textAlign: 'left',
                                }}
                            >
                                {item.description}
                            </Typography>
                        </CardContent>
                    </Card>
                </motion.div>
            ))}
        </div>
    );
}
