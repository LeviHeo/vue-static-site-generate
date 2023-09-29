<script setup lang="ts">
// ! Add the code to app.js for global
// ! The script here only adds things related to dom rendering. e.g) v-for
</script>

<template lang="pug">
.components--shop-list
  .shop-list-inner.inner-content-max
    h2.type-line
      | Available at
    ul.toggle-tab-nav
      li
        button.change-tab(
          data-tab="kowloon"
        )
          | Kowloon
      li
        button.change-tab(
          data-tab="hk-island"
        )
          | Hong Kong Island
      li
        button.change-tab(
          data-tab="nt"
        )
          | New Territories
    .shop-list-content
      .toggle-list-group#kowloon
        .toggle-list.type-plus
          .toggle-list-item
            button.toggle-item-title
              | YAU TSIM MONG
            .toggle-item-body
              .item-body-inner
                .shop-list-item
                  .shop-list-inner
                    .shop-list-group
                      .shop-list-content
                        .detail-group
                          .detail-title
                            | MONG KOK
                          .detail-content
                            .shop-info
                              p.address
                                | Shop B on G/F, 614 Nathan Road, Good Hope Building, Mongkok, Kowloon
                              ul.tel-time
                                li
                                  SvgIcon.icon(
                                    icon-name="tel"
                                  )
                                  a.label(
                                    href="tel:852-2796-9022"
                                  )
                                    | (852) 2796 9022

                                li
                                  SvgIcon.icon(
                                    icon-name="time"
                                  )
                                  .label
                                    | Mon - Sun: 10:30am - 9:00pm
                      .shop-list-action
                        a.btn-ewj.btn-primary(
                          href="/"
                        )
                          | More Details
                          SvgIcon(
                            icon-name="arrow-right-serif"
                          )
                    .shop-list-group
                      .shop-list-content
                        .detail-group
                          .detail-title
                            | TSIM SHA TSUI
                          .detail-content
                            .shop-info
                              p.address
                                | Shop OT 215, Level 2, Ocean Terminal, Harbour City, 3-27 Canton Road, Tsim Sha Tsui
                              ul.tel-time
                                li
                                  SvgIcon.icon(
                                    icon-name="tel"
                                  )
                                  a.label(
                                    href="tel:852-2796-9022"
                                  )
                                    | (852) 2796 9022

                                li
                                  SvgIcon.icon(
                                    icon-name="time"
                                  )
                                  .label
                                    | Mon - Sun: 10:30am - 9:00pm
                      .shop-list-action
                        a.btn-ewj.btn-primary(
                          href="/"
                        )
                          | More Details
                          SvgIcon(
                            icon-name="arrow-right-serif"
                          )
                    .shop-list-group
                      .shop-list-content
                        .detail-group
                          .detail-title
                            | YAU MA TEI
                          .detail-content
                            .shop-info
                              p.address
                                | Shop OT 215, Level 2, Ocean Terminal, Harbour City, 3-27 Canton Road, Tsim Sha Tsui
                              ul.tel-time
                                li
                                  SvgIcon.icon(
                                    icon-name="tel"
                                  )
                                  a.label(
                                    href="tel:852-2796-9022"
                                  )
                                    | (852) 2796 9022

                                li
                                  SvgIcon.icon(
                                    icon-name="time"
                                  )
                                  .label
                                    | Mon - Sun: 10:30am - 9:00pm
                      .shop-list-action
                        a.btn-ewj.btn-primary(
                          href="/"
                        )
                          | More Details
                          SvgIcon(
                            icon-name="arrow-right-serif"
                          )
          .toggle-list-item
            button.toggle-item-title
              | YAU TSIM MONG
            .toggle-item-body
              .item-body-inner
                .shop-list-item
                  .shop-list-inner
                    .shop-list-group
                      .shop-list-content
                        .detail-group
                          .detail-title
                            | MONG KOK
                          .detail-content
                            .shop-info
                              p.address
                                | Shop B on G/F, 614 Nathan Road, Good Hope Building, Mongkok, Kowloon
                              ul.tel-time
                                li
                                  SvgIcon.icon(
                                    icon-name="tel"
                                  )
                                  a.label(
                                    href="tel:852-2796-9022"
                                  )
                                    | (852) 2796 9022

                                li
                                  SvgIcon.icon(
                                    icon-name="time"
                                  )
                                  .label
                                    | Mon - Sun: 10:30am - 9:00pm
                      .shop-list-action
                        a.btn-ewj.btn-primary(
                          href="/"
                        )
                          | More Details
                          SvgIcon(
                            icon-name="arrow-right-serif"
                          )
                    .shop-list-group
                      .shop-list-content
                        .detail-group
                          .detail-title
                            | TSIM SHA TSUI
                          .detail-content
                            .shop-info
                              p.address
                                | Shop OT 215, Level 2, Ocean Terminal, Harbour City, 3-27 Canton Road, Tsim Sha Tsui
                              ul.tel-time
                                li
                                  SvgIcon.icon(
                                    icon-name="tel"
                                  )
                                  a.label(
                                    href="tel:852-2796-9022"
                                  )
                                    | (852) 2796 9022

                                li
                                  SvgIcon.icon(
                                    icon-name="time"
                                  )
                                  .label
                                    | Mon - Sun: 10:30am - 9:00pm
                      .shop-list-action
                        a.btn-ewj.btn-primary(
                          href="/"
                        )
                          | More Details
                          SvgIcon(
                            icon-name="arrow-right-serif"
                          )
                    .shop-list-group
                      .shop-list-content
                        .detail-group
                          .detail-title
                            | YAU MA TEI
                          .detail-content
                            .shop-info
                              p.address
                                | Shop OT 215, Level 2, Ocean Terminal, Harbour City, 3-27 Canton Road, Tsim Sha Tsui
                              ul.tel-time
                                li
                                  SvgIcon.icon(
                                    icon-name="tel"
                                  )
                                  a.label(
                                    href="tel:852-2796-9022"
                                  )
                                    | (852) 2796 9022

                                li
                                  SvgIcon.icon(
                                    icon-name="time"
                                  )
                                  .label
                                    | Mon - Sun: 10:30am - 9:00pm
                      .shop-list-action
                        a.btn-ewj.btn-primary(
                          href="/"
                        )
                          | More Details
                          SvgIcon(
                            icon-name="arrow-right-serif"
                          )
          .toggle-list-item
            button.toggle-item-title
              | YAU TSIM MONG
            .toggle-item-body
              .item-body-inner
                .shop-list-item
                  .shop-list-inner
                    .shop-list-group
                      .shop-list-content
                        .detail-group
                          .detail-title
                            | MONG KOK
                          .detail-content
                            .shop-info
                              p.address
                                | Shop B on G/F, 614 Nathan Road, Good Hope Building, Mongkok, Kowloon
                              ul.tel-time
                                li
                                  SvgIcon.icon(
                                    icon-name="tel"
                                  )
                                  a.label(
                                    href="tel:852-2796-9022"
                                  )
                                    | (852) 2796 9022

                                li
                                  SvgIcon.icon(
                                    icon-name="time"
                                  )
                                  .label
                                    | Mon - Sun: 10:30am - 9:00pm
                      .shop-list-action
                        a.btn-ewj.btn-primary(
                          href="/"
                        )
                          | More Details
                          SvgIcon(
                            icon-name="arrow-right-serif"
                          )
                    .shop-list-group
                      .shop-list-content
                        .detail-group
                          .detail-title
                            | TSIM SHA TSUI
                          .detail-content
                            .shop-info
                              p.address
                                | Shop OT 215, Level 2, Ocean Terminal, Harbour City, 3-27 Canton Road, Tsim Sha Tsui
                              ul.tel-time
                                li
                                  SvgIcon.icon(
                                    icon-name="tel"
                                  )
                                  a.label(
                                    href="tel:852-2796-9022"
                                  )
                                    | (852) 2796 9022

                                li
                                  SvgIcon.icon(
                                    icon-name="time"
                                  )
                                  .label
                                    | Mon - Sun: 10:30am - 9:00pm
                      .shop-list-action
                        a.btn-ewj.btn-primary(
                          href="/"
                        )
                          | More Details
                          SvgIcon(
                            icon-name="arrow-right-serif"
                          )
                    .shop-list-group
                      .shop-list-content
                        .detail-group
                          .detail-title
                            | YAU MA TEI
                          .detail-content
                            .shop-info
                              p.address
                                | Shop OT 215, Level 2, Ocean Terminal, Harbour City, 3-27 Canton Road, Tsim Sha Tsui
                              ul.tel-time
                                li
                                  SvgIcon.icon(
                                    icon-name="tel"
                                  )
                                  a.label(
                                    href="tel:852-2796-9022"
                                  )
                                    | (852) 2796 9022

                                li
                                  SvgIcon.icon(
                                    icon-name="time"
                                  )
                                  .label
                                    | Mon - Sun: 10:30am - 9:00pm
                      .shop-list-action
                        a.btn-ewj.btn-primary(
                          href="/"
                        )
                          | More Details
                          SvgIcon(
                            icon-name="arrow-right-serif"
                          )
</template>

<style lang="scss">
@import "@/assets/css/mixin";
</style>