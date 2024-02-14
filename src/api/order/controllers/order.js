// @ts-nocheck
'use strict';
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order', ({ strapi }) => ({

    async create(ctx) {
        const { products } = ctx.request.body;


        const line_items = await Promise.all(
            products.map(async (product) => {
                const item = await strapi
                    .service("api::product.product")
                    .findOne(product.id);
                return {
                    price_data: {
                        currency: "inr",
                        product_data: {
                            name: item.title,
                        },
                        unit_amount: item.price * 100,
                    },
                    quantity: product.quantity,
                }
            })

        );


        try {
            const session = await stripe.checkout.sessions.create({
                mode: "payment",
                success_url: `${process.env.CLIENT_URL}/?success=true`,
                cancel_url: `${process.env.CLIENT_URL}/?success=false`,
                line_items: line_items,
                payment_method_types: ["card"],
                shipping_address_collection: {
                    allowed_countries: ["IN"],
                },
            });

            await strapi
        .service("api::order.order")
        .create({ data: {  products, stripeId: session.id } });

            return session;
        } catch (error) {
            console.log(error)
            ctx.response.status = 500;
            return error;
        }
    }
}));
