import { useState } from 'react';
import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import axios from 'axios';

interface Order {
    id: number;
    productName: string;
    date: string;
}

export const OrderList: React.FC = () => {
    const [orders, setOrders] = useState<Order[]>([]);

    const handleRefreshClick = () => {
        axios.get('https://unlam-vh-api.azurewebsites.net/orders')
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => console.error(error));
    };

    return (
        <Stack spacing={2}>
            <Stack
                justifyContent={"space-between"}
                direction={"row"}
                spacing={2}
            >
                <Typography component="h2" variant="h5">
                    Pedidos
                </Typography>
                <Button
                    variant="outlined"
                    onClick={handleRefreshClick}
                >
                    Actualizar pedidos
                </Button>
            </Stack>
            <Stack spacing={2}>
                {orders.length === 0 && (
                    <Typography variant="body1">
                        No hay pedidos
                    </Typography>
                )}
                {orders.map(order => (
                    <Card key={order.id}>
                        <CardContent>
                            <Typography>
                                {order.productName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {order.date}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        </Stack>
    );
};
