<template>
    <v-col cols="12" sm="4">
        <v-card>
            <v-img :src="img" class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="300px">
                <v-card-title v-text="title"></v-card-title>
            </v-img>
            <v-card-text>
                <p>
                    <slot></slot>
                </p>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn plain color="blue darken">
                    Перейти к источнику
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-col>

</template>

<script>
export default {
    name: 'NewsItem',
    props: ['img', 'title']
}

</script>