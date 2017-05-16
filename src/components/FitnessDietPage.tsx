import * as React from "react";


export const FitnessDietPage = () => 

<div className="fitness-page">
    <nav className="navbar navbar-default navbar-static-top">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Fitnes &amp; Diet</a>
          <button type="submit" className="btn btn-success">Save</button>
        </div>
        <div id="navbar" className="navbar-collapse collapse">
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" placeholder="Email" className="form-control"/>
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-success">Sign in</button>
          </form>
        </div>
      </div>
    </nav>


    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="jumbotron dietBox">
                    <h2>Diet</h2>
                    <p>
                        <fieldset>
                            <input name="breakfast" id="breakfast" placeholder="Breakfast" type="text" />
                            <input name="lunch" id="lunch" placeholder="Lunch" type="text" />
                            <input name="dinner" id="dinner" placeholder="Dinner" type="text" />
                            <input name="calories" id="calories" placeholder="Calories (kJ)" type="number" />
                        </fieldset>  
                    </p>
                </div>
            </div>

            <div className="col-md-6">
                <div className="jumbotron">
                    <h2>Feelings</h2>
                    <fieldset>
                        <textarea name="feelings" id="feelings" placeholder="How I felt todat " type="text" />
                        <input name="stars" id="stars" placeholder="Stars (0-5)" type="number" />
                    </fieldset>   
                    <h2>Personal data</h2>
                    <fieldset>
                        <input name="weight" id="weight" placeholder="Weight (kg)" type="number" />
                    </fieldset>   
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6">
                <div className="jumbotron">
                    <h2>Sport</h2>
                    <form className="form-inline">
                        <fieldset className="fit_checks">
                            <legend>Fitnes:</legend>
                            <div className="checkbox">
                                <label><input name="fitness" id="fitChest" type="checkbox" /> Chest</label>
                             </div>
                             <div className="checkbox">
                                <label><input name="fitness" id="fitBiceps" type="checkbox" /> Biceps</label>
                            </div>
                            <div className="checkbox">
                                <label><input name="fitness" id="fitTriceps" type="checkbox" /> Triceps</label>
                            </div>
                            <div className="checkbox">
                                <label><input name="fitness" id="fitBack" type="checkbox" /> Back</label>
                            </div>
                            <div className="checkbox">
                                <label><input name="fitness" id="fitBelly" type="checkbox" /> Belly</label>
                            </div>
                            <div className="checkbox">
                                <label><input name="fitness" id="fitLegs" type="checkbox" /> Legs</label>
                            </div>
                        </fieldset>                         
                    </form>
                </div>
            </div>

            <div className="col-md-6">
                <div className="jumbotron stat_results">
                    <h2>Statistics</h2>
                    <span>Average mood: </span> <span id="avgMood">****</span> <br/>
                    <span>Weight differences: </span> <span id="weightDiff">-1 kG</span>
                </div>
            </div>            
        </div>        
    </div>

</div>
;
