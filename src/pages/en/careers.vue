<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Career',
})
</script>

<template lang="pug">
.static-page-content-wrap
  ul.breadcrumb
    li
      a(
        href="/"
      )
        | Home
    li
      | Career
  .inner-content-max
    .page-header-content
      h2.type-line
        | Job Openings
      p.
        For any purchase of diamond, natural fei cui, pearl, gemstone, K-gold, fixed-price gold, fixed-price platinum items and designated watches, you will earn 1 Cash Dollar for every HK$ 200 spent. For any purchase of price-by-weight gold and price-by-weight platinum items^ (pure gold nuggets, pure gold bars and pure gold coins are excluded), you will earn 1 Cash Dollar for every HK$800 spent#.
    .page-detail-content
      .toggle-list.type-plus
        .toggle-list-item
          .toggle-item-title
            | Sale Executive
          .toggle-item-body
            .item-body-inner
              .job-detail-item
                .job-detail-inner
                  .job-detail-content
                    .detail-group
                      .detail-title
                        | Job Responsibilities
                      .detail-content
                        ul
                          li.
                            Responsible for selling jewellery and introducing jewellery products to customers
                          li.
                            Provide professional customer service and handle inquiries from customer
                          li.
                            Participate in daily operation, such as maintain the cleanliness of shop area and window display area, organize product window displays regularly
                          li.
                            Applicant with less experience will be considered to Sales Trainee
                    .detail-group
                      .detail-title
                        | Job Responsibilities
                      p.detail-desc
                        | Competitive Remuneration Package: Discretionary Bonus, Attendance Allowance, Meal Allowance, Education Subsidy, Staff Purchase Privilege, On the Job Training, Medical & Life Insurance, Birthday Leave, Marriage Leave, 10 Days Annual Leave, Max 10 Rest Days per month
                      .detail-content
                        ul
                          li.
                            Responsible for selling jewellery and introducing jewellery products to customers
                          li.
                            Provide professional customer service and handle inquiries from customer
                          li.
                            Participate in daily operation, such as maintain the cleanliness of shop area and window display area, organize product window displays regularly
                          li.
                            Applicant with less experience will be considered to Sales Trainee
                  .job-detail-action
                    a.btn-ewj.btn-primary(
                      href="/"
                    )
                      | Apply Now
                      SvgIcon(
                        icon-name="arrow-right-serif"
                      )
        .toggle-list-item
          .toggle-item-title
            | Store Manager
          .toggle-item-body
            .item-body-inner
              .job-detail-item
                .job-detail-inner
                  .job-detail-content
                    .detail-group
                      .detail-title
                        | Job Responsibilities
                      .detail-content
                        ul
                          li.
                            Responsible for selling jewellery and introducing jewellery products to customers
                          li.
                            Provide professional customer service and handle inquiries from customer
                          li.
                            Participate in daily operation, such as maintain the cleanliness of shop area and window display area, organize product window displays regularly
                          li.
                            Applicant with less experience will be considered to Sales Trainee
                    .detail-group
                      .detail-title
                        | Job Responsibilities
                      p.detail-desc
                        | Competitive Remuneration Package: Discretionary Bonus, Attendance Allowance, Meal Allowance, Education Subsidy, Staff Purchase Privilege, On the Job Training, Medical & Life Insurance, Birthday Leave, Marriage Leave, 10 Days Annual Leave, Max 10 Rest Days per month
                      .detail-content
                        ul
                          li.
                            Responsible for selling jewellery and introducing jewellery products to customers
                          li.
                            Provide professional customer service and handle inquiries from customer
                          li.
                            Participate in daily operation, such as maintain the cleanliness of shop area and window display area, organize product window displays regularly
                          li.
                            Applicant with less experience will be considered to Sales Trainee
                  .job-detail-action
                    a.btn-ewj.btn-primary(
                      href="/"
                    )
                      | Apply Now
                      SvgIcon(
                        icon-name="arrow-right-serif"
                      )
        .toggle-list-item
          .toggle-item-title
            | Sale Assistant
          .toggle-item-body
            .item-body-inner
              | some detailes.....
</template>

<!-- No used scoped for prevent data-v attribute when build -->
<style lang="scss">
.job-detail-item {
  .job-detail-inner {
    display: flex;
    gap:1rem;

    .job-detail-content {
      width:100%;

    }

    .job-detail-action {

    }

    .detail-group {
      + .detail-group {
        margin-top:3rem;
      }
    }

    .detail-title {
      text-transform: uppercase;
      font-weight: 600;
      margin-bottom:1rem;
    }

    .detail-desc {
      margin-bottom:1rem;
    }

    .detail-content {
      ul {
        padding-left:1.2rem;
        li {
          &:before {
            content: "\2022";
            color: var(--color--highlight);
            font-weight: bold;
            display: inline-block;
            width: 1em;
            margin-left: -1em;
          }
          + li {
            margin-top:0.5rem;
          }
        }
      }
    }
  }
}
</style>
