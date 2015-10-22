<div ng-controller="CarController" ng-show="cars.length">

    <div class="row">
        <div class="col-xs-6">
            <div
                class="car-select"
                isteven-multi-select
                input-model="cars"
                output-model="carSelection"
                button-label="icon model"
                item-label="icon model maker"
                tick-property="ticked"
            ></div>
        </div>

        <div class="col-xs-6">
            <div date-picker="startDate" max-view="date" min-view="date" on-set-date="travelDistanceOn" ng-model="date"></div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">DISTANCE</div>
    </div>

<div class="alert alert-info" ng-show="cars.length === 0">
   No cars to show.. 
</div>