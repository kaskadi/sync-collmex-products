![](https://img.shields.io/github/package-json/v/kaskadi/sync-collmex-products)
![](https://img.shields.io/badge/code--style-standard-blue)
![](https://img.shields.io/github/license/kaskadi/sync-collmex-products?color=blue)

**GitHub Actions workflows status**

[![](https://img.shields.io/github/workflow/status/kaskadi/sync-collmex-products/deploy?label=deployed&logo=Amazon%20AWS)](https://github.com/kaskadi/sync-collmex-products/actions?query=workflow%3Adeploy)
[![](https://img.shields.io/github/workflow/status/kaskadi/sync-collmex-products/build?label=build&logo=mocha)](https://github.com/kaskadi/sync-collmex-products/actions?query=workflow%3Abuild)
[![](https://img.shields.io/github/workflow/status/kaskadi/sync-collmex-products/syntax-check?label=syntax-check&logo=serverless)](https://github.com/kaskadi/sync-collmex-products/actions?query=workflow%3Asyntax-check)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/sync-collmex-products?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/sync-collmex-products)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/sync-collmex-products?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/sync-collmex-products)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/sync-collmex-products?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/sync-collmex-products)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/sync-collmex-products?label=code%20quality&logo=LGTM)](https://lgtm.com/projects/g/kaskadi/sync-collmex-products/?mode=list&logo=LGTM)

<!-- You can add badges inside of this section if you'd like -->

****

<!-- automatically generated documentation will be placed in here -->
# Resources documentation

The following lambda functions are defined in this repository:
- [sync-collmex-products](#sync-collmex-products)

The following layers are defined in this repository:
- [sync-collmex-products-layer](#sync-collmex-products-layer)

## sync-collmex-products <a name="sync-collmex-products"></a>

|          Name         | Sources                    | Timeout |                Handler                | Layers                                                                        |
| :-------------------: | :------------------------- | :-----: | :-----------------------------------: | :---------------------------------------------------------------------------- |
| sync-collmex-products | <ul><li>SCHEDULE</li></ul> |   60s   | [handler](./sync-collmex-products.js) | <ul><li>[sync-collmex-products-layer](#sync-collmex-products-layer)</li></ul> |

See [configuration file](./serverless.yml) for more details.

## sync-collmex-products-layer <a name="sync-collmex-products-layer"></a>

### Description

Layer for sync-collmex-products

### Dependencies

- `aws-es-client`, version: `1.0.1` ([see on NPM](https://www.npmjs.com/package/aws-es-client))
- `collmex-client`, version: `1.0.5` ([see on NPM](https://www.npmjs.com/package/collmex-client))

See [configuration file](./serverless.yml) for more details.

# Stack tags

You can use any tags (and their respective values) visible below to find ressources related to this stack on AWS. See [here](https://docs.amazonaws.cn/en_us/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html) for more details.

| Tag          | Value                 |
| :----------- | :-------------------- |
| app          | kaskadi               |
| service      | sync-collmex-products |
| logical-unit | products              |
| type         | schedule              |
<!-- automatically generated documentation will be placed in here -->

<!-- You can customize this template as you'd like! -->